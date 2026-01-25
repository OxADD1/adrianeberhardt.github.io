import { Link } from 'react-router-dom';
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
                    <Link to="/impressum">{t('footer.imprint')}</Link> | <Link to="/datenschutz">{t('footer.privacy')}</Link>
                </p>
            </div>
        </footer>
    );
}
