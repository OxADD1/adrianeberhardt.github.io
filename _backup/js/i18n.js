// i18n.js - Internationalization Script for KA DataX
(function () {
    const SUPPORTED_LANGS = ['de', 'en', 'tr'];
    const DEFAULT_LANG = 'en';

    let translations = {};
    let currentLang = localStorage.getItem('kadatax-lang') || DEFAULT_LANG;

    // Get nested value from object using dot notation
    function getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    // Apply translations to all elements with data-i18n attribute
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getNestedValue(translations, key);

            if (translation) {
                // Check if it's an input placeholder
                if (element.hasAttribute('data-i18n-placeholder')) {
                    element.placeholder = translation;
                } else if (element.hasAttribute('data-i18n-title')) {
                    element.title = translation;
                } else if (element.hasAttribute('data-i18n-aria')) {
                    element.setAttribute('aria-label', translation);
                } else {
                    element.innerHTML = translation;
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLang;

        // Update language switcher display
        updateLanguageSwitcher();
    }

    // Update the language switcher to show current language
    function updateLanguageSwitcher() {
        const switcher = document.querySelector('.lang-switcher-current');
        if (switcher) {
            const flags = { de: '🇩🇪', en: '🇬🇧', tr: '🇹🇷' };
            switcher.textContent = flags[currentLang] + ' ' + currentLang.toUpperCase();
        }
    }

    // Load translations for a language
    async function loadTranslations(lang) {
        try {
            // Determine the base path (works from any subdirectory)
            const scripts = document.querySelectorAll('script[src*="i18n.js"]');
            let basePath = '../translations/';

            if (scripts.length > 0) {
                const src = scripts[0].src;
                basePath = src.replace('/js/i18n.js', '/translations/');
            }

            const response = await fetch(basePath + lang + '.json');
            if (!response.ok) throw new Error('Translation file not found');
            translations = await response.json();
            applyTranslations();
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to German if translation fails
            if (lang !== DEFAULT_LANG) {
                currentLang = DEFAULT_LANG;
                loadTranslations(DEFAULT_LANG);
            }
        }
    }

    // Public function to change language
    window.setLanguage = function (lang) {
        if (SUPPORTED_LANGS.includes(lang)) {
            currentLang = lang;
            localStorage.setItem('kadatax-lang', lang);
            loadTranslations(lang);

            // Close dropdown after selection
            const dropdown = document.querySelector('.lang-dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
        }
    };

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function () {
        loadTranslations(currentLang);

        // Setup language switcher dropdown toggle
        const switcher = document.querySelector('.lang-switcher');
        if (switcher) {
            switcher.addEventListener('click', function (e) {
                e.stopPropagation();
                const dropdown = this.querySelector('.lang-dropdown');
                if (dropdown) {
                    dropdown.classList.toggle('active');
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function () {
                const dropdown = document.querySelector('.lang-dropdown');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });
})();
