import { Link } from 'react-router-dom'
import ProductShowcase from '../components/ProductShowcase'

const stats = [
  { value: '10+', label: 'Abgeschlossene Projekte' },
  { value: '3', label: 'Jahre Erfahrung' },
  { value: '100%', label: 'Kundenzufriedenheit' },
  { value: '24/7', label: 'Support verfügbar' },
]

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Schnell & Effizient',
    description: 'Wir liefern in time — ohne Umwege, ohne Overhead. Deine Zeit ist uns wichtig.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Sicherheit zuerst',
    description: 'Security by Design — von der Planung bis zum Deployment denken wir in Schutzebenen.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Persönlicher Kontakt',
    description: 'Kein Ticket-System, kein Call-Center. Du sprichst direkt mit den Entwicklern.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Maßgeschneiderte Lösungen',
    description: 'Keine Templates, keine Kompromisse. Wir bauen exakt das, was dein Business braucht.',
  },
]

const teasers = [
  {
    to: '/os',
    title: 'ChronixOS',
    description: 'Das Betriebssystem der nächsten Generation — performant, sicher, offen.',
  },
  {
    to: '/services',
    title: 'Services',
    description: 'Webentwicklung, IT-Support und strategische Beratung aus einer Hand.',
  },
  {
    to: '/team',
    title: 'Team',
    description: 'Drei erfahrene Entwickler. Eine gemeinsame Vision für bessere IT.',
  },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs tracking-[0.4em] text-chronix-accent uppercase mb-6 opacity-80">
          IT Solutions · Next Generation
        </p>
        <h1 className="font-mono text-4xl sm:text-5xl md:text-7xl tracking-widest text-chronix-glow text-glow leading-tight">
          CHRONIX
        </h1>
        <p className="mt-6 text-slate-300 text-xl md:text-2xl max-w-2xl leading-relaxed">
          Professionelle IT-Lösungen für Unternehmen, die vorankommen wollen.
        </p>
        <p className="mt-3 text-slate-500 text-base max-w-xl leading-relaxed">
          Webentwicklung · Custom Software · IT-Beratung · Support
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            to="/services"
            className="font-mono tracking-widest text-sm px-8 py-4 bg-chronix-accent text-white hover:bg-chronix-accent/80 hover:shadow-glow-strong rounded transition-all"
          >
            UNSERE SERVICES →
          </Link>
          <Link
            to="/kontakt"
            className="font-mono tracking-widest text-sm px-8 py-4 border border-chronix-blue/50 text-chronix-glow hover:border-chronix-accent hover:bg-chronix-accent/10 hover:shadow-glow-blue rounded transition-all"
          >
            KONTAKT AUFNEHMEN
          </Link>
        </div>
        <div className="mt-16 text-slate-500 text-xs tracking-[0.4em] animate-bounce">
          SCROLL ↓
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-chronix-blue/20 bg-chronix-navy/20 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-4xl md:text-5xl text-chronix-glow text-glow mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Showcase */}
      <ProductShowcase />

      {/* Warum Chronix */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="font-mono text-3xl md:text-4xl text-chronix-glow text-glow mb-4">
            Warum Chronix?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Wir sind kein anonymes Unternehmen — wir sind Entwickler, die für ihre Arbeit brennen.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group border border-chronix-blue/30 hover:border-chronix-accent bg-chronix-navy/20 hover:bg-chronix-navy/50 transition-all duration-300 rounded-lg p-6 hover:shadow-glow-blue"
            >
              <div className="text-chronix-accent mb-4">{reason.icon}</div>
              <h3 className="font-mono text-lg text-chronix-glow mb-2 group-hover:text-glow">
                {reason.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teasers */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <h2 className="font-mono text-2xl md:text-3xl text-chronix-glow mb-3">
            Was wir machen
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {teasers.map((teaser) => (
            <Link
              key={teaser.to}
              to={teaser.to}
              className="group border border-chronix-blue/40 hover:border-chronix-accent bg-chronix-navy/30 hover:bg-chronix-navy/60 transition-all duration-300 rounded-lg p-6 hover:shadow-glow-blue"
            >
              <h3 className="font-mono text-xl text-chronix-glow mb-2 group-hover:text-glow">
                {teaser.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{teaser.description}</p>
              <span className="mt-4 inline-block text-xs tracking-widest text-chronix-accent opacity-0 group-hover:opacity-100 transition-opacity">
                MEHR ERFAHREN →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-chronix-blue/20 bg-chronix-navy/20 py-20 px-6 text-center">
        <h2 className="font-mono text-3xl md:text-4xl text-chronix-glow text-glow mb-4">
          Bereit loszulegen?
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
          Schreib uns — wir antworten innerhalb von 24 Stunden und besprechen unverbindlich, wie wir helfen können.
        </p>
        <Link
          to="/kontakt"
          className="inline-block font-mono tracking-widest text-sm px-10 py-4 bg-chronix-accent text-white hover:bg-chronix-accent/80 hover:shadow-glow-strong rounded transition-all"
        >
          JETZT KONTAKT AUFNEHMEN →
        </Link>
      </section>
    </div>
  )
}
