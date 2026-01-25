import { useTranslation } from 'react-i18next';
import './Projects.css';

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
        id: 'bitcoinscanner',
        title: 'Bitcoin Scanner',
        descriptionKey: 'projects.bitcoinscanner.desc',
        image: '/images/beta-logo-bitcoin_scanner.jpg',
        url: 'https://oxadd1.github.io/Bitcoin-Scanner-Website/',
        type: 'app'
    },
    {
        id: 'kadatax',
        title: 'KA DataX',
        descriptionKey: 'projects.kadatax.desc',
        image: '/images/kadatax-preview.png',
        url: 'https://kadatax.com/startseite/',
        type: 'website'
    },
    {
        id: 'reflectric',
        title: 'Reflectric',
        descriptionKey: 'projects.reflectric.desc',
        image: '/images/Reflectric-logo.png',
        url: 'https://oxadd1.github.io/reflectric/',
        type: 'app'
    },
    {
        id: 'cashcounter',
        title: 'CashCounter',
        descriptionKey: 'projects.cashcounter.desc',
        image: '/images/CashProtector-logo.png',
        url: 'https://oxadd1.github.io/cashcounter/',
        type: 'app'
    },
    {
        id: 'bnb',
        title: 'Chez Muna & Lucien',
        descriptionKey: 'projects.bnb.desc',
        image: '/images/bnb.jpeg',
        url: 'https://chezmunalucien.com/',
        type: 'website'
    },
    {
        id: 'burger',
        title: 'Burger Imbiss',
        descriptionKey: 'projects.burger.desc',
        image: '/images/beispiel-imbiss.jpeg',
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
