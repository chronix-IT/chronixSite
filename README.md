# Chronix — IT Solutions Website

Official website of **Chronix IT Solutions** — a professional IT services company offering web development, custom software, IT consulting, and first-level support.

---

## Live Preview

> 🔗 Coming soon — [chronix.dev](https://chronix.dev)

---

## Features

- **Interactive 3D hero** — animated QFP chip built with Three.js / React Three Fiber
- **Fully responsive** — mobile-first design, works on all screen sizes
- **Cookie consent banner** — DSGVO/GDPR compliant with localStorage persistence
- **Contact form** — pre-fills the user's mail client for direct contact
- **Legal pages** — Impressum & Datenschutzerklärung included
- **Smooth navigation** — React Router with scroll-to-top on page change
- **Dark tech aesthetic** — custom Tailwind theme with blue glow effects

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, "Why Chronix", services teaser, CTA |
| `/os` | ChronixOS — upcoming OS project |
| `/services` | Services — offerings, process, contact CTA |
| `/team` | Team — the three founders |
| `/kontakt` | Contact — form + contact info |
| `/impressum` | Legal notice |
| `/datenschutz` | Privacy policy |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| [React Router 7](https://reactrouter.com) | Client-side routing |
| [Tailwind CSS 3](https://tailwindcss.com) | Styling |
| [Three.js](https://threejs.org) | 3D rendering |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [React Three Drei](https://github.com/pmndrs/drei) | Three.js helpers (Float, Sparkles, ...) |
| [GSAP](https://gsap.com) | Animations |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/chronixSite.git
cd chronixSite

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy to any static host (Cloudflare Pages, Vercel, Netlify, etc.).

---

## Project Structure

```
chronixSite/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── chronix.png          # Logo
│   ├── components/
│   │   ├── CookieBanner.jsx     # DSGVO cookie consent
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductShowcase.jsx  # Interactive 3D chip
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── Datenschutz.jsx
│   │   ├── Home.jsx
│   │   ├── Impressum.jsx
│   │   ├── OS.jsx
│   │   ├── Services.jsx
│   │   └── Team.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Team

| Name | Role | GitHub |
|---|---|---|
| Kiano Polet | Co-Founder & Developer | [@kiano](https://github.com/deinUsername) |
| David Krnetic | Co-Founder & Developer | [@david](https://github.com/deinUsername) |
| Tyron Jeremy Kordon | Co-Founder & Developer | [@tyron](https://github.com/deinUsername) |

---

## License

[chronixSite](https://chronix.dev) © 2026 by Tyron Jeremy Kordon, David Krnetic, Kiano Polet  
Licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

[![CC BY-NC-ND 4.0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-nd.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
