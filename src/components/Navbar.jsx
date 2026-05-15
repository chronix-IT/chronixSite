import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import chronixLogo from '../assets/chronix.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/os', label: 'OS' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
]

function navLinkClass({ isActive }) {
  const base = 'transition-colors duration-200 hover:text-chronix-glow'
  return isActive
    ? `${base} text-chronix-accent`
    : `${base} text-slate-300`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-chronix-black/80 border-b border-chronix-blue/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center"
          aria-label="Chronix Home"
        >
          <img
            src={chronixLogo}
            alt="Chronix"
            className="h-16 w-16 object-contain drop-shadow-[0_0_12px_rgba(77,159,255,0.7)]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={navLinkClass}
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
          <span
            className={`block w-6 h-0.5 bg-chronix-glow transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-chronix-glow transition-opacity ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-chronix-glow transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
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
                  className={navLinkClass}
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
