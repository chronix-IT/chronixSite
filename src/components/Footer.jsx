import { Link } from 'react-router-dom'
import chronixLogo from '../assets/chronix.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/os', label: 'ChronixOS' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/kontakt', label: 'Kontakt' },
]

const legalLinks = [
  { to: '/impressum', label: 'Impressum' },
  { to: '/datenschutz', label: 'Datenschutz' },
]

export default function Footer() {
  return (
    <footer className="bg-chronix-dark border-t border-chronix-blue/20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={chronixLogo}
              alt="Chronix"
              className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(77,159,255,0.6)]"
            />
            <span className="font-mono text-lg text-chronix-glow">CHRONIX</span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Professionelle IT-Lösungen für Unternehmen, die vorankommen wollen.
          </p>
          <a
            href="mailto:chronix.it@gmail.com"
            className="text-chronix-accent text-sm hover:text-glow transition-all"
          >
            chronix.it@gmail.com
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-slate-400 hover:text-chronix-glow text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-4">Kontakt</h3>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <p>Antwort innerhalb von 24 Stunden</p>
            <a
              href="mailto:chronix.it@gmail.com"
              className="text-chronix-glow hover:text-glow transition-all"
            >
              chronix.it@gmail.com
            </a>
            <Link
              to="/kontakt"
              className="inline-block mt-2 font-mono tracking-widest text-xs px-5 py-2.5 border border-chronix-blue/40 text-chronix-glow hover:border-chronix-accent hover:bg-chronix-accent/10 hover:shadow-glow-blue rounded transition-all w-fit"
            >
              ANFRAGE STELLEN →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-chronix-blue/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-1">
            <a href="/" className="hover:text-slate-400 transition-colors">chronixSite</a>
            <span>© {new Date().getFullYear()} by</span>
            <span className="text-slate-500">Tyron Jeremy Kordon, David Krnetic, Kiano Polet</span>
            <span>is licensed under</span>
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              CC BY-NC-ND 4.0
            </a>
            <span className="flex items-center gap-0.5 ml-0.5">
              <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" className="w-4 h-4 opacity-50" />
              <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" className="w-4 h-4 opacity-50" />
              <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="NC" className="w-4 h-4 opacity-50" />
              <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="ND" className="w-4 h-4 opacity-50" />
            </span>
          </div>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-slate-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
