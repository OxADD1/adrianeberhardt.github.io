import { useTranslation } from 'react-i18next';
import './Projects.css';

// Import images
import bitcoinScannerImg from '/images/beta-logo-bitcoin_scanner.jpg';
import kaDataxImg from '/images/kadatax-preview.png';
import reflectricImg from '/images/Reflectric-logo.png';
import cashCounterImg from '/images/CashProtector-logo.png';
import bnbImg from '/images/bnb.jpeg';
import burgerImg from '/images/beispiel-imbiss.jpeg';
import camScriptImg from '/images/camscript-logo.png';

interface Project {
    id: string;
    title: string;
    descriptionKey: string;
    image: string;
    url: string;
    type: 'app' | 'website';
}

const projects: Project[] = [
    {
        id: 'camscript',
        title: 'CamScript',
        descriptionKey: 'projects.camscript.desc',
        image: camScriptImg,
        url: 'https://oxadd1.github.io/CamScript-Website/',
        type: 'app'
    },
    {
        id: 'bitcoinscanner',
        title: 'Bitcoin Scanner',
        descriptionKey: 'projects.bitcoinscanner.desc',
        image: bitcoinScannerImg,
        url: 'https://oxadd1.github.io/Bitcoin-Scanner-Website/',
        type: 'app'
    },
    {
        id: 'kadatax',
        title: 'KA DataX',
        descriptionKey: 'projects.kadatax.desc',
        image: kaDataxImg,
        url: 'https://kadatax.com/startseite/',
        type: 'website'
    },
    {
        id: 'reflectric',
        title: 'Reflectric',
        descriptionKey: 'projects.reflectric.desc',
        image: reflectricImg,
        url: 'https://oxadd1.github.io/reflectric/',
        type: 'app'
    },
    {
        id: 'cashcounter',
        title: 'CashCounter',
        descriptionKey: 'projects.cashcounter.desc',
        image: cashCounterImg,
        url: 'https://oxadd1.github.io/cashcounter/',
        type: 'app'
    },
    {
        id: 'bnb',
        title: 'Chez Muna & Lucien',
        descriptionKey: 'projects.bnb.desc',
        image: bnbImg,
        url: 'https://chezmunalucien.com/',
        type: 'website'
    },
    {
        id: 'burger',
        title: 'Burger Imbiss',
        descriptionKey: 'projects.burger.desc',
        image: burgerImg,
        url: 'https://oxadd1.github.io/beispiel-imbiss/',
        type: 'website'
    }
];

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="section container">
            <h2 className="section-headline" style={{ textAlign: 'center' }}>{t('projects.title')}</h2>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                {t('projects.subtitle')}
            </p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <div className="project-img-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{t(project.descriptionKey)}</p>
                            <div className="project-link">
                                <span>{project.type === 'app' ? t('projects.learn_more') : t('projects.visit_website')}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
