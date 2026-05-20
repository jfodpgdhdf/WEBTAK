import type { Metadata } from "next";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Webtak GmbH & Co. KG",
  robots: { index: false, follow: false },
};

export default function Datenschutzerklaerung() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight mb-10">
          Datenschutzerklärung
        </h1>

        <section className="prose prose-sm max-w-none text-[var(--color-ink)] space-y-8">

          <div>
            <h2 className="text-xl font-semibold mb-3">1. Verantwortlicher</h2>
            <address className="not-italic text-[var(--color-ink-muted)] leading-relaxed">
              Webtak GmbH &amp; Co. KG<br />
              Im Schiff 12<br />
              68789 St. Leon-Rot<br />
              E-Mail:{" "}
              <a href="mailto:datenschutz@webtak.de" className="text-[var(--color-accent)] hover:underline">
                datenschutz@webtak.de
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die
              Verarbeitung erfolgt ausschließlich auf Grundlage einer gesetzlichen Erlaubnis
              (Art.&nbsp;6 DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Hosting</h2>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">
              Diese Website wird bei{" "}
              <strong className="text-[var(--color-ink)]">ALL-INKL.COM – Neue Medien Münnich</strong>
              {" "}(Hauptstraße 68, 02742 Friedersdorf, Deutschland) gehostet. Der Anbieter erhebt
              automatisch Informationen in sogenannten Server-Log-Files, die Ihr Browser übermittelt
              (IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browser-Typ). Eine Zusammenführung dieser
              Daten mit anderen Datenquellen erfolgt nicht. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1
              lit.&nbsp;f DSGVO (berechtigtes Interesse am Betrieb der Website). Die Logs werden nach
              spätestens 7 Tagen gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Kontaktformular</h2>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">
              Das Kontaktformular auf dieser Seite übermittelt Ihre Angaben (Name, Betrieb,
              Kontaktdaten) direkt per E-Mail an{" "}
              <a href="mailto:mail@webtak.de" className="text-[var(--color-accent)] hover:underline">
                mail@webtak.de
              </a>. Die Verarbeitung erfolgt auf unserem Hosting-Server in Deutschland (All-Inkl). Es
              werden keine Daten an Drittländer übermittelt.
            </p>
            <p className="text-[var(--color-ink-muted)] leading-relaxed mt-2">
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Durchführung
              vorvertraglicher Maßnahmen) sowie Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen). Wir speichern die
              Formulardaten nur so lange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. Kunden-Referenzen und Testimonials</h2>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">
              Wenn Sie als Kunde oder Geschäftspartner einer Veröffentlichung Ihrer Referenz
              zugestimmt haben, verarbeiten wir auf Grundlage Ihrer Einwilligung
              (Art.&nbsp;6 Abs.&nbsp;1 Satz&nbsp;1 lit.&nbsp;a DSGVO) folgende Daten:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--color-ink-muted)]">
              <li>Ihren Namen und Ihre Funktion im Unternehmen</li>
              <li>den Namen Ihres Unternehmens und ggf. Ihr Firmenlogo</li>
              <li>Ihr schriftliches oder von Ihnen freigegebenes mündliches Statement</li>
              <li>eine Beschreibung der mit unserer Zusammenarbeit erzielten Ergebnisse</li>
            </ul>
            <p className="text-[var(--color-ink-muted)] leading-relaxed mt-3">
              Diese Daten werden auf den von Ihnen freigegebenen Kanälen veröffentlicht: unsere
              Website (webtak.de), unsere LinkedIn-Unternehmensseite, Printmaterialien sowie Messe-
              und Veranstaltungsmaterialien.
            </p>
            <p className="text-[var(--color-ink-muted)] leading-relaxed mt-3">
              <strong className="text-[var(--color-ink)]">Widerruf:</strong> Sie können Ihre
              Einwilligung jederzeit ohne Angabe von Gründen widerrufen (Art.&nbsp;7 Abs.&nbsp;3
              DSGVO). Der Widerruf wirkt ab Eingang bei uns — keine Wartefrist. Richten Sie Ihren
              Widerruf an{" "}
              <a href="mailto:datenschutz@webtak.de" className="text-[var(--color-accent)] hover:underline">
                datenschutz@webtak.de
              </a>. Digitale Inhalte werden binnen 14 Tagen entfernt; Printmaterialien bis zur
              nächsten Produktion, längstens 6 Monate nach Widerruf.
            </p>
            <p className="text-[var(--color-ink-muted)] leading-relaxed mt-3">
              Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">6. Ihre Rechte</h2>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">
              Sie haben gegenüber uns folgende Rechte:
            </p>
            <p className="text-[var(--color-ink-muted)] leading-relaxed mt-2">
              Recht auf Auskunft (Art.&nbsp;15 DSGVO), Berichtigung (Art.&nbsp;16 DSGVO), Löschung
              (Art.&nbsp;17 DSGVO), Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO),
              Datenübertragbarkeit (Art.&nbsp;20 DSGVO) sowie Widerspruch (Art.&nbsp;21 DSGVO).
            </p>
            <p className="text-[var(--color-ink-muted)] leading-relaxed mt-2">
              Sie haben zudem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
              Die für uns zuständige Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz
              und die Informationsfreiheit Baden-Württemberg.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">7. Kontakt Datenschutz</h2>
            <p className="text-[var(--color-ink-muted)] leading-relaxed">
              Für Fragen zum Datenschutz wenden Sie sich bitte an:{" "}
              <a href="mailto:datenschutz@webtak.de" className="text-[var(--color-accent)] hover:underline">
                datenschutz@webtak.de
              </a>
            </p>
          </div>

          <p className="text-xs text-[var(--color-ink-muted)] pt-4 border-t border-black/5">
            Stand: Mai 2026
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
