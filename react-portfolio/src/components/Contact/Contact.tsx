import { useTranslation } from 'react-i18next';
import './Contact.css';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="section container contact-section">
            <h2 className="section-headline">{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>

            <div className="contact-card">
                <div className="contact-info-grid">
                    <div className="contact-item">
                        <h4>{t('contact.name')}</h4>
                        <p>Adrian Eberhardt</p>
                    </div>
                    <div className="contact-item">
                        <h4>Email</h4>
                        <p><a href="mailto:info.adrianeberhardt@gmail.com">info.adrianeberhardt@gmail.com</a></p>
                    </div>
                    <div className="contact-item">
                        <h4>{t('contact.phone')}</h4>
                        <p><a href="tel:+4915123676333">+4915123676333</a></p>
                    </div>
                    <div className="contact-item">
                        <h4>{t('contact.address')}</h4>
                        <p>
                            <a
                                href="https://maps.google.com/?q=Strohdorfer+Str.+16,+72488+Sigmaringen,+Germany"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Strohdorfer Str. 16, 72488 Sigmaringen
                            </a>
                        </p>
                    </div>
                </div>

                <div className="whatsapp-cta">
                    <a
                        href="https://wa.me/+4915123676333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        {t('contact.whatsapp')}
                    </a>
                </div>

                <div className="social-media-links">
                    <a href="https://github.com/OxADD1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://x.com/AdrianBuildsiOS" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter/X">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/@Adrian_Builds_iOS" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
