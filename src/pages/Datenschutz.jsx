export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-mono text-4xl text-chronix-glow text-glow mb-10">Datenschutzerklärung</h1>

      <div className="flex flex-col gap-10 text-slate-400 leading-relaxed text-sm">
        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Chronix IT Solutions<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland<br />
            E-Mail:{' '}
            <a href="mailto:chronix.it@gmail.com" className="text-chronix-accent hover:text-glow transition-all">
              chronix.it@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">2. Cookies</h2>
          <p className="mb-3">
            Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf deinem Endgerät gespeichert werden.
          </p>
          <h3 className="text-chronix-accent text-sm font-mono mb-2">Technisch notwendige Cookies</h3>
          <p className="mb-4">
            Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
            Sie speichern z. B. deine Cookie-Einstellungen (<code className="text-chronix-glow font-mono bg-chronix-navy/40 px-1 rounded">chronix_cookie_consent</code>).
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <h3 className="text-chronix-accent text-sm font-mono mb-2">Optionale Cookies</h3>
          <p>
            Sofern du "Alle akzeptieren" gewählt hast, können zusätzliche Cookies zur Analyse und Verbesserung
            der Website gesetzt werden. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            Du kannst deine Einwilligung jederzeit durch Löschen der Browser-Cookies widerrufen.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">3. Kontaktformular / E-Mail</h2>
          <p>
            Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst, werden die von dir angegebenen
            Daten (Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage verwendet
            und nicht an Dritte weitergegeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung / berechtigtes Interesse).
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">4. Hosting</h2>
          <p>
            Diese Website wird auf einem externen Server gehostet. Der Hosting-Anbieter erhebt automatisch
            Zugriffsdaten (Server-Logfiles), z. B. IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeit.
            Diese Daten werden nicht mit anderen Daten zusammengeführt und nach spätestens 7 Tagen gelöscht.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">5. Deine Rechte</h2>
          <p>
            Du hast gemäß DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Zur Ausübung deiner Rechte wende dich an:{' '}
            <a href="mailto:chronix.it@gmail.com" className="text-chronix-accent hover:text-glow transition-all">
              chronix.it@gmail.com
            </a>
          </p>
          <p className="mt-3">
            Du hast außerdem das Recht, dich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">6. Aktualität</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung der Website oder
            gesetzliche Änderungen kann eine Anpassung notwendig werden.
          </p>
        </section>

        <p className="text-xs text-slate-600 border-t border-chronix-blue/20 pt-6">
          Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })} —
          Bitte vervollständige die Adressangaben vor Veröffentlichung.
        </p>
      </div>
    </div>
  )
}
