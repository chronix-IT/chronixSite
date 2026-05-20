const features = [
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Gebaut für Geschwindigkeit — kompromisslos optimiert.',
  },
  {
    icon: '🔒',
    title: 'Sicherheit',
    description: 'Security by Design. Schutz auf jeder Ebene.',
  },
  {
    icon: '🛠',
    title: 'Eigenentwicklung',
    description: '100% von Chronix entwickelt — kein Fremdcode.',
  },
  {
    icon: '🌐',
    title: 'Open Source',
    description: 'Transparent und offen. Code zum Mitlesen.',
  },
]

export default function OS() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <section className="text-center mb-20">
        <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl text-chronix-glow text-glow mb-6">
          ChronixOS
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Das Betriebssystem der nächsten Generation.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 mb-20">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group border border-chronix-blue/40 hover:border-chronix-accent bg-chronix-navy/30 hover:bg-chronix-navy/60 transition-all duration-300 rounded-lg p-8 hover:shadow-glow-blue"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h2 className="font-mono text-2xl text-chronix-glow mb-2">
              {feature.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-20">
        <div className="border-2 border-dashed border-chronix-blue/40 rounded-lg bg-chronix-navy/20 aspect-video flex items-center justify-center">
          <span className="text-slate-500 font-mono tracking-widest text-sm">
            SCREENSHOT COMING SOON
          </span>
        </div>
      </section>

      <section className="text-center">
        <button
          type="button"
          disabled
          className="font-mono tracking-widest text-sm px-8 py-4 border border-chronix-blue/40 text-slate-500 rounded cursor-not-allowed opacity-60"
        >
          DOWNLOAD COMING SOON
        </button>
      </section>
    </div>
  )
}
