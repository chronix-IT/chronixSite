const services = [
  {
    icon: '🌐',
    title: 'Webentwicklung',
    description: 'Professionelle Websites & Webapps — modern, performant, skalierbar.',
  },
  {
    icon: '🖥',
    title: 'First Level Support',
    description: 'IT-Helpdesk & Remote-Support für reibungslose Abläufe.',
  },
  {
    icon: '💡',
    title: 'IT-Beratung',
    description: 'Infrastruktur & Systemoptimierung — strategisch und nachhaltig.',
  },
  {
    icon: '⚙️',
    title: 'Software Development',
    description: 'Custom Software & Automatisierung für deine Geschäftsprozesse.',
  },
]

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <section className="text-center mb-16">
        <h1 className="font-mono text-4xl md:text-5xl text-chronix-glow text-glow mb-4">
          Unsere Dienstleistungen
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Vom Webauftritt bis zur Custom Software — wir liefern.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="group border border-chronix-blue/40 hover:border-chronix-accent bg-chronix-navy/30 hover:bg-chronix-navy/60 transition-all duration-300 rounded-lg p-8 hover:shadow-glow-blue"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="font-mono text-2xl text-chronix-glow mb-2 group-hover:text-glow">
              {service.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      <section className="text-center border border-chronix-blue/30 bg-chronix-navy/30 rounded-lg py-12 px-6">
        <h2 className="font-mono text-2xl md:text-3xl text-chronix-glow mb-3">
          Interesse? Schreib uns.
        </h2>
        <p className="text-slate-400 mb-6">
          Lass uns gemeinsam herausfinden, wie wir helfen können.
        </p>
        <a
          href="mailto:contact@chronix.dev"
          className="inline-block font-mono tracking-widest text-sm px-8 py-4 border border-chronix-accent text-chronix-glow bg-chronix-accent/10 hover:bg-chronix-accent/25 hover:shadow-glow-strong rounded transition-all"
        >
          KONTAKT AUFNEHMEN →
        </a>
      </section>
    </div>
  )
}
