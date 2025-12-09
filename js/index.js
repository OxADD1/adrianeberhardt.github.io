document.addEventListener('DOMContentLoaded', function () {
  // Language dictionaries
  const languages = {
    'de': {
      // Navigation
      'nav.home': 'Startseite',
      'nav.expertise': 'Expertise',
      'nav.projects': 'Projekte',
      'nav.contact': 'Kontakt',

      // Hero Section
      'hero.welcome': 'Herzlich Willkommen!',
      'hero.subtitle': 'iOS-Entwicklung • Web-Entwicklung',
      'hero.cta': 'Kontaktieren Sie mich',

      // Expertise Section
      'expertise.title': 'Meine Expertise',
      'expertise.subtitle': 'Maßgeschneiderte digitale Lösungen',
      'expertise.ios.title': 'iOS-Entwicklung',
      'expertise.ios.desc': 'Apps für iPhone, iPad und Mac – von der Konzeption über UI/UX bis zur Veröffentlichung im App Store, inklusive Testing und langfristiger Betreuung.',
      'expertise.web.title': 'Webentwicklung',
      'expertise.web.desc': 'Moderne, responsive Websites und Web-Apps – optimiert für Performance, Barrierefreiheit und eine klare Markenbotschaft auf allen Geräten.',
      'expertise.quote': '"In einer Welt, in der Technologie ständig neue Grenzen überschreitet, liegt der wahre Wert nicht nur im Code selbst, sondern in der kreativen Verbindung zwischen menschlicher Innovation und digitalen Möglichkeiten."',

      // Projects Section
      'projects.title': 'Meine Projekte',
      'projects.subtitle': 'Entdecken Sie eine Auswahl meiner aktuellen Projekte!<br>Von praktischen Web-Anwendungen bis hin zu benutzerfreundlichen mobilen Apps - hier sehen Sie, wie ich Technologie einsetze, um alltagstaugliche Lösungen zu schaffen.',
      'projects.reflectric.desc': 'Eine iOS-App für tägliche Reflexionen, Stimmungsverfolgung und persönliches Wachstum. Mit iCloud-Sync für iPhone, iPad und Mac.',
      'projects.cashcounter.desc': 'Eine intuitive iOS-Anwendung zum Verfolgen persönlicher Einnahmen und Ausgaben. Mit Diagrammen und Exportfunktionen für einfache Finanzverwaltung.',
      'projects.bnb.title': 'Chez Muna & Lucien <br>Bed and Breakfast in Thun',
      'projects.bnb.desc': 'Eine maßgeschneiderte Website für ein Bed & Breakfast in Thun.',
      'projects.burger.title': 'Burger Imbiss Website',
      'projects.burger.desc': 'Eine moderne, responsive Website für einen Burger-Imbiss mit Online-Bestellfunktion via WhatsApp.',
      'projects.learn_more': 'Mehr erfahren →',
      'projects.visit_website': 'Zur Website →',

      // Contact Section
      'contact.title': 'Kontakt',
      'contact.subtitle': 'Haben Sie Fragen? Kontaktieren Sie mich gerne!',
      'contact.name': 'Name',
      'contact.phone': 'Telefon',
      'contact.address': 'Adresse',
      'contact.whatsapp': 'Schreiben Sie mir auf WhatsApp!',
      'contact.social': 'Folgen Sie mir',
      'contact.social_subtitle': 'Bleiben Sie auf dem Laufenden über meine neuesten Projekte',

      // Footer
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz'
    },
    'en': {
      // Navigation
      'nav.home': 'Home',
      'nav.expertise': 'Expertise',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.welcome': 'Welcome!',
      'hero.subtitle': 'iOS Development • Web Development',
      'hero.cta': 'Contact Me',

      // Expertise Section
      'expertise.title': 'My Expertise',
      'expertise.subtitle': 'Tailored Digital Solutions',
      'expertise.ios.title': 'iOS Development',
      'expertise.ios.desc': 'Apps for iPhone, iPad, and Mac – from conception through UI/UX to App Store publication, including testing and long-term support.',
      'expertise.web.title': 'Web Development',
      'expertise.web.desc': 'Modern, responsive websites and web apps – optimized for performance, accessibility, and a clear brand message across all devices.',
      'expertise.quote': '"In a world where technology constantly breaks new ground, true value lies not just in the code itself, but in the creative connection between human innovation and digital possibilities."',

      // Projects Section
      'projects.title': 'My Projects',
      'projects.subtitle': 'Discover a selection of my current projects!<br>From practical web applications to user-friendly mobile apps - see how I use technology to create everyday solutions.',
      'projects.reflectric.desc': 'An iOS app for daily reflections, mood tracking, and personal growth. With iCloud sync for iPhone, iPad, and Mac.',
      'projects.cashcounter.desc': 'An intuitive iOS application for tracking personal income and expenses. With charts and export features for easy financial management.',
      'projects.bnb.title': 'Chez Muna & Lucien <br>Bed and Breakfast in Thun',
      'projects.bnb.desc': 'A custom-designed website for a Bed & Breakfast in Thun.',
      'projects.burger.title': 'Burger Restaurant Website',
      'projects.burger.desc': 'A modern, responsive website for a burger restaurant with online ordering via WhatsApp.',
      'projects.learn_more': 'Learn more →',
      'projects.visit_website': 'Visit website →',

      // Contact Section
      'contact.title': 'Contact',
      'contact.subtitle': 'Have questions? Feel free to contact me!',
      'contact.name': 'Name',
      'contact.phone': 'Phone',
      'contact.address': 'Address',
      'contact.whatsapp': 'Message me on WhatsApp!',
      'contact.social': 'Follow Me',
      'contact.social_subtitle': 'Stay updated on my latest projects',

      // Footer
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy'
    }
  };

  // Set the language on page load (default to English)
  let currentLang = 'en';

  // Function to update content based on selected language
  function updateContent(lang) {
    // Update HTML elements with translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (languages[lang] && languages[lang][key]) {
        // Handle text content and innerHTML (for <br> tags)
        if (languages[lang][key].includes('<br>')) {
          element.innerHTML = languages[lang][key];
        } else {
          element.textContent = languages[lang][key];
        }
      }

      // Update placeholder if element is an input
      if (element.placeholder && languages[lang][key]) {
        element.placeholder = languages[lang][key];
      }
    });

    // Update document language
    document.documentElement.lang = lang;

    // Update language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update current language label in navbar (flag only)
    const currentLangLabel = document.querySelector('.current-lang-label');
    if (currentLangLabel) {
      const langFlags = {
        'de': '🇩🇪',
        'en': '🇬🇧'
      };
      currentLangLabel.textContent = langFlags[lang] || lang.toUpperCase();
    }

    // Update current language
    currentLang = lang;
  }

  // Add event listeners to language buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      updateContent(lang);

      // Close the mobile navbar if it's open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // Initialize with default language
  updateContent(currentLang);

  // Mobile navigation toggle
  const toggleBtn = document.getElementById('toggle-mobile-nav');
  const mobileNav = document.querySelector('.mobile-nav');
  const page = document.getElementById('page');

  if (toggleBtn && mobileNav && page) {
    toggleBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('active');
      page.classList.toggle('mobile-nav-active');
    });

    // Close mobile nav when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('active');
        page.classList.remove('mobile-nav-active');
      });
    });
  }
});
