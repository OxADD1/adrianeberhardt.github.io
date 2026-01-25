import './Legal.css';

export default function Impressum() {
    return (
        <>
            <section className="legal-hero">
                <div className="container">
                    <h1>Impressum</h1>
                    <p>Rechtliche Informationen</p>
                </div>
            </section>

            <main>
                <div className="container">
                    <article className="legal-card">
                        <section>
                            <h2>Angaben gemäß § 5 TMG</h2>
                            <p>
                                Adrian Eberhardt<br />
                                Strohdorfer Str. 16<br />
                                72488 Sigmaringen
                            </p>
                        </section>

                        <section>
                            <h2>Kontakt</h2>
                            <p>
                                Telefon: <a href="tel:+4915123676333">+49 151 2367 6333</a><br />
                                E-Mail: <a href="mailto:info.adrianeberhardt@gmail.com">info.adrianeberhardt@gmail.com</a>
                            </p>
                        </section>

                        <section>
                            <h2>Redaktionell verantwortlich</h2>
                            <p>Adrian Eberhardt</p>
                        </section>

                        <section>
                            <h2>EU-Streitschlichtung</h2>
                            <p>
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                                    https://ec.europa.eu/consumers/odr/
                                </a>.<br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>
                        </section>

                        <section>
                            <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                            <p>
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                                Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
        </>
    );
}
