export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-mono text-4xl text-chronix-glow text-glow mb-10">Impressum</h1>

      <div className="flex flex-col gap-10 text-slate-400 leading-relaxed">
        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            Chronix IT Solutions<br />
            [Straße und Hausnummer]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">Kontakt</h2>
          <p>
            E-Mail:{' '}
            <a href="mailto:chronix.it@gmail.com" className="text-chronix-accent hover:text-glow transition-all">
              chronix.it@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">Verantwortlich für den Inhalt</h2>
          <p>
            Kiano, David, TJ<br />
            (Anschrift wie oben)
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-lg text-chronix-glow mb-3">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
            Autors bzw. Erstellers.
          </p>
        </section>

        <p className="text-xs text-slate-600 border-t border-chronix-blue/20 pt-6">
          Bitte vervollständige die Pflichtangaben (Adresse) vor Veröffentlichung der Website.
        </p>
      </div>
    </div>
  )
}
