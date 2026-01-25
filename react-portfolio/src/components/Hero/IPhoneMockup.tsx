import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './IPhoneMockup.css';

// App data
const apps = [
    {
        id: 'bitcoinscanner',
        name: 'Bitcoin Scanner',
        icon: '/images/beta-logo-bitcoin_scanner.jpg',
        url: 'https://oxadd1.github.io/Bitcoin-Scanner-Website/'
    },
    {
        id: 'reflectric',
        name: 'Reflectric',
        icon: '/images/Reflectric-logo.png',
        url: 'https://oxadd1.github.io/reflectric/'
    },
    {
        id: 'cashcounter',
        name: 'CashCounter',
        icon: '/images/CashProtector-logo.png',
        url: 'https://oxadd1.github.io/cashcounter/'
    }
];

export default function IPhoneMockup() {
    const { t, i18n } = useTranslation();
    const [showAlert, setShowAlert] = useState(true);
    const [time, setTime] = useState(new Date());

    // Update time every minute
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(interval);
    }, []);

    // Get localized month and day
    const months = t('iphone.months', { returnObjects: true }) as string[];
    const days = t('iphone.days', { returnObjects: true }) as string[];

    const currentMonth = months[time.getMonth()];
    const currentDay = days[time.getDay()];
    const currentDate = time.getDate();
    const currentTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`;

    return (
        <div className="iphone-mockup">
            <div className="iphone-frame">
                <div className="iphone-screen">
                    {/* Status Bar */}
                    <div className="iphone-status-bar">
                        <span className="status-time">{currentTime}</span>
                        <span className="status-icons">
                            <i className="fas fa-signal" style={{ fontSize: '11px' }}></i>
                            <i className="fas fa-wifi" style={{ fontSize: '11px' }}></i>
                            <i className="fas fa-battery-full" style={{ fontSize: '13px' }}></i>
                        </span>
                    </div>

                    {/* Dynamic Island */}
                    <div className="iphone-notch"></div>

                    <div className="iphone-content">
                        {/* Calendar Widget */}
                        <div className="iphone-widget">
                            <div className="widget-header">
                                <div className="widget-icon">
                                    <i className="fas fa-calendar"></i>
                                </div>
                                <span className="widget-title">{currentMonth}</span>
                            </div>
                            <div className="widget-date">{currentDate}</div>
                            <div className="widget-day">{currentDay}</div>
                        </div>

                        {/* App Grid */}
                        <div className="app-grid">
                            {apps.map((app) => (
                                <a
                                    key={app.id}
                                    href={app.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="app-icon"
                                >
                                    <img src={app.icon} alt={app.name} className="app-icon-img" />
                                    <span className="app-label">{app.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* iOS Dock */}
                    <div className="iphone-dock">
                        <a href="mailto:info.adrianeberhardt@gmail.com" title="Email">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
                                alt="Mail"
                                className="dock-icon"
                            />
                        </a>
                        <a href="https://github.com/OxADD1" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                alt="GitHub"
                                className="dock-icon"
                                style={{ background: '#fff', padding: '8px', boxSizing: 'border-box', borderRadius: '13px' }}
                            />
                        </a>
                        <a href="https://x.com/AdrianBuildsiOS" target="_blank" rel="noopener noreferrer" title="X">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                                alt="X"
                                className="dock-icon"
                                style={{ background: '#fff', padding: '12px', boxSizing: 'border-box', borderRadius: '13px', filter: 'invert(1)' }}
                            />
                        </a>
                    </div>

                    {/* Interactive Alert */}
                    {showAlert && (
                        <div className="iphone-alert">
                            <p>{t('iphone.alert')}</p>
                            <button onClick={() => setShowAlert(false)}>OK</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
