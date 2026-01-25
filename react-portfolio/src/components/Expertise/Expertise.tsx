import { useTranslation } from 'react-i18next';
import './Expertise.css';

export default function Expertise() {
    const { t } = useTranslation();

    return (
        <section id="expertise" className="section container">
            <div className="services-header">
                <h2 className="section-headline">{t('expertise.title')}</h2>
                <p>{t('expertise.subtitle')}</p>
            </div>

            <div className="services-grid">
                {/* iOS Development */}
                <div className="service-card">
                    <div className="service-card-header">
                        <i className="fa-brands fa-apple service-card-icon"></i>
                        <h3>{t('expertise.ios.title')}</h3>
                    </div>
                    <p>{t('expertise.ios.desc')}</p>
                </div>

                {/* Web Development */}
                <div className="service-card">
                    <div className="service-card-header">
                        <i className="fa-solid fa-code service-card-icon"></i>
                        <h3>{t('expertise.web.title')}</h3>
                    </div>
                    <p>{t('expertise.web.desc')}</p>
                </div>
            </div>

            {/* Quote */}
            <div className="quote-section">
                <blockquote>
                    <p>{t('expertise.quote')}</p>
                </blockquote>
            </div>
        </section>
    );
}
