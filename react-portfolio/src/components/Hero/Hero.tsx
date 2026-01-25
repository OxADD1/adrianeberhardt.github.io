import { useTranslation } from 'react-i18next';
import IPhoneMockup from './IPhoneMockup';
import './Hero.css';

export default function Hero() {
    const { t } = useTranslation();

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero container">
            <div className="hero-columns">
                <div className="hero-content">
                    <h1 className="hero-greeting">
                        <span>{t('hero.greeting')}</span> <span className="gradient-name">Adrian Eberhardt</span>
                    </h1>
                    <p className="hero-role">{t('hero.subtitle')}</p>
                    <button className="cta-button" onClick={scrollToContact}>
                        {t('hero.cta')}
                    </button>
                </div>
                <div className="hero-visual">
                    <IPhoneMockup />
                </div>
            </div>
        </section>
    );
}
