import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

// Import logo from original project
const logoUrl = '/logo.png';

export default function Header() {
    const { t, i18n } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('portfolio-lang', lang);
        setMobileMenuOpen(false);
    };

    const currentLang = i18n.language === 'de' ? '🇩🇪 DE' : '🇬🇧 EN';

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        if (id === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header className="header">
                <div className="container nav-container">
                    <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}>
                        <img src={logoUrl} alt="Adrian Eberhardt Logo" />
                        <span className="logo-text">Adrian Eberhardt</span>
                    </a>

                    <nav className="nav-links">
                        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}>{t('nav.home')}</a>
                        <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollToSection('#expertise'); }}>{t('nav.expertise')}</a>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}>{t('nav.projects')}</a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>{t('nav.contact')}</a>
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
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
                <a href="#" className="overlay-logo">
                    <img src={logoUrl} alt="Logo" />
                </a>
                <button className="close-menu-btn" aria-label="Menü schließen" onClick={() => setMobileMenuOpen(false)}>
                    ×
                </button>
                <nav className="mobile-nav">
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}>{t('nav.home')}</a>
                    <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollToSection('#expertise'); }}>{t('nav.expertise')}</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}>{t('nav.projects')}</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>{t('nav.contact')}</a>
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
