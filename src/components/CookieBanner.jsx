import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'chronix_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'all')
    setVisible(false)
  }

  function necessary() {
    localStorage.setItem(STORAGE_KEY, 'necessary')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto border border-chronix-blue/40 bg-chronix-black/95 backdrop-blur-md rounded-lg shadow-glow-blue p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Icon */}
        <div className="text-chronix-accent shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="font-mono text-sm text-chronix-glow mb-1">Cookie-Einstellungen</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Wir verwenden technisch notwendige Cookies, damit die Website funktioniert. Mit "Alle akzeptieren" stimmst du zusätzlich optionalen Cookies zu.{' '}
            <Link to="/datenschutz" className="text-chronix-accent hover:text-glow underline underline-offset-2 transition-all">
              Datenschutzerklärung
            </Link>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={necessary}
            className="font-mono text-xs tracking-widest px-5 py-2.5 border border-chronix-blue/40 text-slate-300 hover:border-slate-400 hover:text-slate-100 rounded transition-all whitespace-nowrap"
          >
            NUR NOTWENDIGE
          </button>
          <button
            type="button"
            onClick={accept}
            className="font-mono text-xs tracking-widest px-5 py-2.5 bg-chronix-accent text-white hover:bg-chronix-accent/80 hover:shadow-glow-strong rounded transition-all whitespace-nowrap"
          >
            ALLE AKZEPTIEREN
          </button>
        </div>
      </div>
    </div>
  )
}
