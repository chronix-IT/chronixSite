import { Link } from 'react-router-dom'
import ProductShowcase from '../components/ProductShowcase'

const teasers = [
  {
    to: '/os',
    title: 'ChronixOS',
    description: 'Das Betriebssystem der nächsten Generation.',
  },
  {
    to: '/services',
    title: 'Services',
    description: 'Webentwicklung, Support und Beratung.',
  },
  {
    to: '/team',
    title: 'Team',
    description: 'Die Köpfe hinter Chronix.',
  },
]

export default function Home() {
  return (
    <div className="relative">
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-mono text-5xl md:text-7xl tracking-widest text-chronix-glow text-glow">
            CHRONIX
          </h1>
          <p className="mt-4 text-slate-400 text-lg tracking-wide">
            IT Solutions · Next Generation
          </p>
        </div>

        <div className="mt-16 text-slate-500 text-xs tracking-[0.4em] animate-bounce">
          SCROLL ↓
        </div>
      </section>

      <ProductShowcase />

      <section className="max-w-6xl mx-auto px-6 py-24">
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
              <p className="text-slate-400 text-sm leading-relaxed">
                {teaser.description}
              </p>
              <span className="mt-4 inline-block text-xs tracking-widest text-chronix-accent opacity-0 group-hover:opacity-100 transition-opacity">
                MEHR ERFAHREN →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
