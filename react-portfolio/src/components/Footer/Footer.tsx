import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">Adrian Eberhardt</div>
                <p>&copy; 2026 Adrian Eberhardt</p>
                <p className="footer-links">
                    <a href="/impressum">{t('footer.imprint')}</a> | <a href="/datenschutz">{t('footer.privacy')}</a>
                </p>
            </div>
        </footer>
    );
}
