import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logoUrl from '/logo.png';

export default function Header() {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('portfolio-lang', lang);
        setMobileMenuOpen(false);
    };

    const currentLang = i18n.language === 'de' ? '🇩🇪 DE' : '🇬🇧 EN';

    const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        // If we're not on the home page, navigate there first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation then scroll
            setTimeout(() => {
                if (sectionId === '') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 100);
        } else {
            // We're on home page, just scroll
            if (sectionId === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const isLegalPage = location.pathname === '/impressum' || location.pathname === '/datenschutz';

    return (
        <>
            <header className="header">
                <div className="container nav-container">
                    <a href="/" className="logo" onClick={(e) => handleNavClick(e, '')}>
                        <img src={logoUrl} alt="Adrian Eberhardt Logo" />
                        <span className="logo-text">Adrian Eberhardt</span>
                    </a>

                    {!isLegalPage && (
                        <>
                            <nav className="nav-links">
                                <a href="/" onClick={(e) => handleNavClick(e, '')}>{t('nav.home')}</a>
                                <a href="/#expertise" onClick={(e) => handleNavClick(e, 'expertise')}>{t('nav.expertise')}</a>
                                <a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t('nav.projects')}</a>
                                <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t('nav.contact')}</a>
                            </nav>

                            <div className="lang-switcher">
                                <span className="lang-switcher-current">{currentLang}</span>
                                <div className="lang-dropdown">
                                    <button className="lang-option" onClick={() => changeLanguage('de')}>🇩🇪 Deutsch</button>
                                    <button className="lang-option" onClick={() => changeLanguage('en')}>🇬🇧 English</button>
                                </div>
                            </div>

                            <button
                                className="mobile-menu-btn"
                                aria-label="Menü öffnen"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
                <a href="/" className="overlay-logo" onClick={(e) => handleNavClick(e, '')}>
                    <img src={logoUrl} alt="Logo" />
                </a>
                <button className="close-menu-btn" aria-label="Menü schließen" onClick={() => setMobileMenuOpen(false)}>
                    ×
                </button>
                <nav className="mobile-nav">
                    <a href="/" onClick={(e) => handleNavClick(e, '')}>{t('nav.home')}</a>
                    <a href="/#expertise" onClick={(e) => handleNavClick(e, 'expertise')}>{t('nav.expertise')}</a>
                    <a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')}>{t('nav.projects')}</a>
                    <a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t('nav.contact')}</a>
                    <div className="mobile-lang-switcher">
                        <button
                            className={`mobile-lang-btn ${i18n.language === 'de' ? 'active' : ''}`}
                            onClick={() => changeLanguage('de')}
                        >
                            🇩🇪 DE
                        </button>
                        <button
                            className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                        >
                            🇬🇧 EN
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}
