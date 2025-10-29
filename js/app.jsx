const NAV_LINKS = [
  { id: "hero", label: "Start" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projekte" },
  { id: "contact", label: "Kontakt" }
];

const EXPERTISE = [
  {
    icon: "fa-brands fa-apple",
    title: "iOS-Entwicklung",
    description:
      "Apps für iPhone, iPad und Mac – von der Konzeption über UI/UX bis zur Veröffentlichung im App Store, inklusive Testing und langfristiger Betreuung."
  },
  {
    icon: "fa-solid fa-code",
    title: "Webentwicklung",
    description:
      "Moderne, responsive Websites und Web-Apps – optimiert für Performance, Barrierefreiheit und eine klare Markenbotschaft auf allen Geräten."
  }
];

const PROJECTS = [
  {
    title: "CashCounter",
    description:
      "Intuitive iOS-App zum Tracken persönlicher Finanzen – inklusive Diagrammen, Exporten und Fokus auf Privacy.",
    image: "./images/CashProtector-logo.png",
    href: "https://oxadd1.github.io/cashcounter/",
    linkText: "Mehr Informationen zu Finanz-Tracker"
  },
  {
    title: "Reflectric",
    description:
      "Eine iOS-App für tägliche Reflexionen, Stimmungsverfolgung und persönliches Wachstum – aktuell in Entwicklung mit iCloud-Sync für iPhone, iPad und Mac.",
    image: "./images/Reflectric-logo.png",
    href: "https://oxadd1.github.io/reflectric/",
    linkText: "Mehr Informationen zu Reflectric",
    status: "Beta"
  },
  {
    title: "Chez Muna & Lucien",
    subtitle: "Bed and Breakfast in Thun",
    description: "Eine maßgeschneiderte Website für ein Bed & Breakfast in Thun.",
    image: "./images/bnb.jpeg",
    href: "https://chezmunalucien.com/",
    linkText: "Projekt Chez Muna & Lucien ansehen"
  }
];

const CONTACT = {
  name: "Adrian Eberhardt",
  email: "info.adrianeberhardt@gmail.com",
  phoneDisplay: "+49 151 2367 6333",
  phoneHref: "+4915123676333",
  addressLine1: "Strohdorfer Str. 16",
  addressLine2: "72488 Sigmaringen",
  googleMaps: "https://maps.google.com/?q=Strohdorfer+Str.+16,+72488+Sigmaringen,+Germany",
  whatsapp: "https://wa.me/+4915123676333"
};

const SectionHeader = ({ kicker, title, description }) => (
  <header className="section-header">
    {kicker && <span className="kicker">{kicker}</span>}
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </header>
);

const Header = ({ isMenuOpen, onToggleMenu, onNavigate }) => (
  <header className={`site-header ${isMenuOpen ? "is-open" : ""}`}>
    <div className="container">
      <a
        className="brand"
        href="#hero"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("hero");
        }}
      >
        <img src="./images/logo.png" alt="Logo Adrian Eberhardt" aria-hidden="true" />
        <span>Adrian Eberhardt</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-label="Navigation umschalten"
        onClick={onToggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`site-nav ${isMenuOpen ? "show" : ""}`} aria-label="Hauptnavigation">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container">
      <div className="hero-content">
        <p className="hero-kicker">Herzlich Willkommen!</p>
        <h1>Adrian Eberhardt</h1>
        <p className="hero-subtitle">iOS-Entwicklung • Web-Entwicklung</p>
        <a className="btn btn-primary" href="#contact">Kontaktieren Sie mich</a>
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section id="expertise" className="expertise">
    <div className="container">
      <SectionHeader
        title="Meine Expertise"
        description={<em>Maßgeschneiderte digitale Lösungen</em>}
      />
      <div className="grid cards-grid">
        {EXPERTISE.map((item) => (
          <article key={item.title} className="stack-card">
            <div className="icon-wrapper">
              <i className={item.icon} aria-hidden="true"></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <blockquote className="quote">
        <p>
          "In einer Welt, in der Technologie ständig neue Grenzen überschreitet, liegt der wahre Wert nicht nur im Code selbst, sondern in der kreativen Verbindung zwischen menschlicher Innovation und digitalen Möglichkeiten."
        </p>
        <cite>Adrian Eberhardt</cite>
      </blockquote>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="projects">
    <div className="container">
      <SectionHeader
        title="Meine Projekte"
        description={
          <em>
            Entdecken Sie eine Auswahl meiner aktuellen Projekte!
            <br />
            Von praktischen Web-Anwendungen bis hin zu benutzerfreundlichen mobilen Apps - hier sehen Sie,
            wie ich Technologie einsetze, um alltagstaugliche Lösungen zu schaffen.
          </em>
        }
      />
      <div className="grid cards-grid">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            className="project-card"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.linkText}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
              {project.status && <span className="badge">{project.status}</span>}
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
              <p>{project.description}</p>
              <span className="project-cta">
                {project.linkText}
                <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <SectionHeader
        title="Kontakt"
        description={<em>Haben Sie Fragen? Kontaktieren Sie mich gerne!</em>}
      />
      <div className="contact-grid">
        <div className="contact-card">
          <h4>Name</h4>
          <p><span className="contact-highlight">{CONTACT.name}</span></p>
          <h4>Email</h4>
          <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        </div>
        <div className="contact-card">
          <h4>Telefon</h4>
          <p><a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a></p>
          <h4>Adresse</h4>
          <p>
            <a href={CONTACT.googleMaps} target="_blank" rel="noopener noreferrer">
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </a>
          </p>
        </div>
      </div>
      <div className="contact-actions">
        <a className="btn btn-primary" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
          Schreiben Sie mir auf WhatsApp!
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>&copy; 2025 Adrian Eberhardt</p>
      <div className="footer-links">
        <a href="./html/impressum.html">Impressum</a>
        <a href="./html/datenschutz.html">Datenschutz</a>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = React.useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = React.useCallback(() => setIsMenuOpen((prev) => !prev), []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu]);

  React.useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const nav = document.querySelector(".site-nav");
      const toggle = document.querySelector(".menu-toggle");
      if (
        nav &&
        !nav.contains(event.target) &&
        toggle &&
        !toggle.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen, closeMenu]);

  const handleNavigate = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} onNavigate={handleNavigate} />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
