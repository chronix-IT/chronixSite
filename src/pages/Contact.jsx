import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'E-Mail',
    value: 'contact@chronix.dev',
    href: 'mailto:contact@chronix.dev',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Antwortzeit',
    value: 'Innerhalb von 24 Stunden',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\n\n${form.message}`
    )
    const subject = encodeURIComponent(form.subject || 'Anfrage über chronix.dev')
    window.location.href = `mailto:contact@chronix.dev?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <section className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] text-chronix-accent uppercase mb-4 opacity-80">
          Direkt & unkompliziert
        </p>
        <h1 className="font-mono text-4xl md:text-5xl text-chronix-glow text-glow mb-6">
          Kontakt aufnehmen
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Egal ob Projekt-Anfrage, Support oder einfach eine Frage — wir freuen uns von dir zu hören.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Contact Info */}
        <aside className="flex flex-col gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="border border-chronix-blue/30 bg-chronix-navy/20 rounded-lg p-6"
            >
              <div className="text-chronix-accent mb-3">{item.icon}</div>
              <div className="text-xs tracking-widest text-slate-500 uppercase mb-1">{item.label}</div>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-chronix-glow hover:text-glow transition-all font-mono text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-slate-300 text-sm">{item.value}</span>
              )}
            </div>
          ))}

          <div className="border border-chronix-blue/30 bg-chronix-navy/20 rounded-lg p-6">
            <div className="text-xs tracking-widest text-slate-500 uppercase mb-3">Erstes Gespräch</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Das erste Beratungsgespräch ist für dich <span className="text-chronix-glow">kostenlos und unverbindlich</span>. Wir schauen gemeinsam, ob und wie wir helfen können.
            </p>
          </div>
        </aside>

        {/* Form */}
        <div className="lg:col-span-2">
          {sent ? (
            <div className="border border-chronix-blue/40 bg-chronix-navy/30 rounded-lg p-12 text-center h-full flex flex-col items-center justify-center gap-4">
              <div className="text-chronix-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-mono text-2xl text-chronix-glow text-glow">Mail-Client geöffnet</h2>
              <p className="text-slate-400 max-w-sm">
                Deine Daten wurden in dein Mail-Programm übertragen. Einfach absenden und wir melden uns bald!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-chronix-blue/40 bg-chronix-navy/30 rounded-lg p-8 flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs tracking-widest text-slate-500 uppercase">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    className="bg-chronix-black/50 border border-chronix-blue/30 focus:border-chronix-accent rounded px-4 py-3 text-slate-200 placeholder:text-slate-600 outline-none transition-colors text-sm font-mono"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs tracking-widest text-slate-500 uppercase">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="max@beispiel.de"
                    className="bg-chronix-black/50 border border-chronix-blue/30 focus:border-chronix-accent rounded px-4 py-3 text-slate-200 placeholder:text-slate-600 outline-none transition-colors text-sm font-mono"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs tracking-widest text-slate-500 uppercase">
                  Betreff
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="z.B. Website-Entwicklung, IT-Support, ..."
                  className="bg-chronix-black/50 border border-chronix-blue/30 focus:border-chronix-accent rounded px-4 py-3 text-slate-200 placeholder:text-slate-600 outline-none transition-colors text-sm font-mono"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs tracking-widest text-slate-500 uppercase">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Beschreib kurz, womit wir dir helfen können..."
                  className="bg-chronix-black/50 border border-chronix-blue/30 focus:border-chronix-accent rounded px-4 py-3 text-slate-200 placeholder:text-slate-600 outline-none transition-colors text-sm font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="font-mono tracking-widest text-sm px-8 py-4 bg-chronix-accent text-white hover:bg-chronix-accent/80 hover:shadow-glow-strong rounded transition-all self-start"
              >
                NACHRICHT SENDEN →
              </button>

              <p className="text-xs text-slate-600">
                * Pflichtfelder. Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
