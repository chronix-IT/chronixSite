import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/os', label: 'OS' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
]

export default function Footer() {
  return (
    <footer className="bg-chronix-dark border-t border-chronix-blue/20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          © 2025 Chronix. All rights reserved.
        </p>
        <nav>
          <ul className="flex flex-wrap items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-slate-300 hover:text-chronix-glow transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
