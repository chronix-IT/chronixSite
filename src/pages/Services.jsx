import { Link } from 'react-router-dom'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Webentwicklung',
    description:
      'Professionelle Websites und Webapplikationen — modern, performant, skalierbar. Von der Landing Page bis zur komplexen Web-App mit React, Next.js oder anderen modernen Technologien.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.47 0-2.441-1.798-1.442-2.798L4.2 15.3" />
      </svg>
    ),
    title: 'First Level Support',
    description:
      'IT-Helpdesk und Remote-Support für reibungslose Abläufe im Alltag. Schnelle Reaktionszeiten, klare Kommunikation und nachhaltige Lösungen statt dauerhafter Workarounds.',
    tags: ['Remote Support', 'Helpdesk', 'Windows', 'Linux'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'IT-Beratung',
    description:
      'Infrastruktur, Systemoptimierung und strategische IT-Planung — nachhaltig und auf dein Unternehmen zugeschnitten. Wir analysieren, bewerten und empfehlen die beste Lösung.',
    tags: ['Infrastruktur', 'Cloud', 'Netzwerk', 'Strategie'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Software Development',
    description:
      'Custom Software und Automatisierung für deine Geschäftsprozesse. Wir entwickeln Tools, Skripte und Applikationen, die manuelle Arbeit eliminieren und Fehler reduzieren.',
    tags: ['Python', 'Node.js', 'Automatisierung', 'APIs'],
  },
]

const steps = [
  {
    number: '01',
    title: 'Erstkontakt',
    description: 'Du schreibst uns — wir melden uns innerhalb von 24 Stunden und vereinbaren ein kostenloses Erstgespräch.',
  },
  {
    number: '02',
    title: 'Analyse',
    description: 'Wir verstehen deine Anforderungen, analysieren die Situation und erarbeiten einen klaren Plan.',
  },
  {
    number: '03',
    title: 'Umsetzung',
    description: 'Wir setzen die Lösung um — transparent, mit regelmäßigen Updates und direktem Ansprechpartner.',
  },
  {
    number: '04',
    title: 'Übergabe & Support',
    description: 'Übergabe mit Dokumentation und optionalem laufendem Support — du bist nie allein.',
  },
]

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <section className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] text-chronix-accent uppercase mb-4 opacity-80">
          Was wir anbieten
        </p>
        <h1 className="font-mono text-4xl md:text-5xl text-chronix-glow text-glow mb-6">
          Unsere Dienstleistungen
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Vom ersten Konzept bis zum fertigen Produkt — wir begleiten dich auf dem gesamten Weg.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid gap-6 md:grid-cols-2 mb-28">
        {services.map((service) => (
          <div
            key={service.title}
            className="group border border-chronix-blue/40 hover:border-chronix-accent bg-chronix-navy/30 hover:bg-chronix-navy/60 transition-all duration-300 rounded-lg p-8 hover:shadow-glow-blue"
          >
            <div className="text-chronix-accent mb-5">{service.icon}</div>
            <h2 className="font-mono text-2xl text-chronix-glow mb-3 group-hover:text-glow">
              {service.title}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 border border-chronix-blue/30 text-chronix-accent/80 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="mb-28">
        <div className="text-center mb-14">
          <h2 className="font-mono text-3xl md:text-4xl text-chronix-glow text-glow mb-4">
            Wie wir arbeiten
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Klar, direkt und ohne Überraschungen — so läuft ein Projekt mit Chronix ab.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(100%-0px)] w-full h-px bg-chronix-blue/20 z-0" />
              )}
              <div className="relative z-10 border border-chronix-blue/30 bg-chronix-navy/20 rounded-lg p-6">
                <div className="font-mono text-3xl text-chronix-accent/40 mb-3">{step.number}</div>
                <h3 className="font-mono text-lg text-chronix-glow mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center border border-chronix-blue/30 bg-chronix-navy/30 rounded-lg py-14 px-6">
        <h2 className="font-mono text-2xl md:text-3xl text-chronix-glow mb-3">
          Klingt nach dem, was du brauchst?
        </h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Schreib uns — das erste Gespräch ist kostenlos und unverbindlich. Wir schauen gemeinsam, wie wir helfen können.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/kontakt"
            className="inline-block font-mono tracking-widest text-sm px-8 py-4 bg-chronix-accent text-white hover:bg-chronix-accent/80 hover:shadow-glow-strong rounded transition-all"
          >
            JETZT ANFRAGEN →
          </Link>
          <a
            href="mailto:contact@chronix.dev"
            className="inline-block font-mono tracking-widest text-sm px-8 py-4 border border-chronix-blue/50 text-chronix-glow hover:border-chronix-accent hover:bg-chronix-accent/10 rounded transition-all"
          >
            contact@chronix.dev
          </a>
        </div>
      </section>
    </div>
  )
}
