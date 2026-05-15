import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import chronixLogo from '../assets/chronix.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/os', label: 'OS' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/kontakt', label: 'Kontakt' },
]

function navLinkClass({ isActive }, isKontakt = false) {
  if (isKontakt) {
    return isActive
      ? 'font-mono text-xs tracking-widest px-4 py-2 border border-chronix-accent bg-chronix-accent/20 text-chronix-glow rounded transition-all'
      : 'font-mono text-xs tracking-widest px-4 py-2 border border-chronix-blue/50 text-chronix-glow hover:border-chronix-accent hover:bg-chronix-accent/10 hover:shadow-glow-blue rounded transition-all'
  }
  const base = 'transition-colors duration-200 hover:text-chronix-glow'
  return isActive
    ? `${base} text-chronix-accent`
    : `${base} text-slate-300`
}


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-chronix-black/80 border-b border-chronix-blue/20">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group"
          aria-label="Chronix Home"
        >
          <img
            src={chronixLogo}
            alt="Chronix"
            className="h-9 w-9 object-contain drop-shadow-[0_0_10px_rgba(77,159,255,0.6)] group-hover:drop-shadow-[0_0_18px_rgba(77,159,255,0.9)] transition-all duration-300"
          />
          <div>
            <div className="font-mono text-base leading-none tracking-[0.2em] text-chronix-glow group-hover:text-glow transition-all duration-300">
              CHRONIX
            </div>
            <div className="text-[9px] tracking-[0.35em] text-slate-500 uppercase mt-1">
              IT Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={(state) => navLinkClass(state, link.to === '/kontakt')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-chronix-glow transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-chronix-glow transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-chronix-glow transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-chronix-blue/20 bg-chronix-black/95">
          <ul className="flex flex-col px-6 py-4 gap-3 text-sm font-medium">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={(state) => navLinkClass(state, link.to === '/kontakt')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
