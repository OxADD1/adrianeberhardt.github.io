import { Link } from 'react-router-dom';
import './Legal.css';

export default function Datenschutz() {
    return (
        <>
            <section className="legal-hero">
                <div className="container">
                    <h1>Datenschutzerklärung</h1>
                    <p>Informationen zum Schutz Ihrer Daten</p>
                </div>
            </section>

            <main>
                <div className="container">
                    <article className="legal-card">
                        <h2>1. Datenschutz auf einen Blick</h2>
                        <h3>Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                        </p>

                        <h3>Datenerfassung auf dieser Website</h3>
                        <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                            können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung
                            entnehmen.
                        </p>

                        <h4>Wie erfassen wir Ihre Daten?</h4>
                        <p>
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
                            um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p>
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
                            betreten.
                        </p>

                        <h4>Wofür nutzen wir Ihre Daten?</h4>
                        <p>
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                            Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>

                        <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                        <p>
                            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                            oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                            haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
                            Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                            zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </p>
                        <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

                        <h3>Analyse-Tools und Tools von Drittanbietern</h3>
                        <p>
                            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
                            allem mit sogenannten Analyseprogrammen.
                        </p>
                        <p>
                            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                            Datenschutzerklärung.
                        </p>

                        <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
                        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                        <h3>GitHub Pages</h3>
                        <p>
                            Diese Website wird auf GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P. Kelly Jr.
                            Street, San Francisco, CA 94107, USA.
                        </p>
                        <p>
                            GitHub erhebt automatisch technische Informationen, einschließlich IP-Adressen. Die personenbezogenen
                            Daten, die auf dieser Website erfasst werden, werden auf den Servern von GitHub gespeichert.
                        </p>
                        <p>
                            Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub:{' '}
                            <a
                                href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement
                            </a>.
                        </p>

                        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3>Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                            personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                            dieser Datenschutzerklärung.
                        </p>

                        <h3>Hinweis zur verantwortlichen Stelle</h3>
                        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <p>
                            Adrian Eberhardt<br />
                            Strohdorfer Str. 16<br />
                            72488 Sigmaringen
                        </p>
                        <p>
                            Telefon: +4915123676333<br />
                            E-Mail: info.adrianeberhardt@gmail.com
                        </p>

                        <h3>Speicherdauer</h3>
                        <p>
                            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                            verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                        </p>

                        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
                        <p>
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                            SSL- bzw. TLS-Verschlüsselung.
                        </p>

                        <h2>4. Datenerfassung auf dieser Website</h2>
                        <h3>Server-Log-Dateien</h3>
                        <p>
                            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem,
                            IP-Adresse etc.).
                        </p>

                        <h2>5. Plugins und Tools</h2>
                        <h3>Font Awesome (lokales Hosting)</h3>
                        <p>
                            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Font Awesome. Font Awesome ist lokal
                            installiert.
                        </p>

                        <h3>Google Maps</h3>
                        <p>Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited.</p>
                        <p>
                            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Mehr
                            Informationen in der Datenschutzerklärung von Google:{' '}
                            <a
                                href="https://policies.google.com/privacy?hl=de"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://policies.google.com/privacy?hl=de
                            </a>.
                        </p>
                    </article>
                </div>
            </main>
        </>
    );
}
