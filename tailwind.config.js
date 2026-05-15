/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'chronix-black': '#050508',
        'chronix-dark': '#0a0a14',
        'chronix-navy': '#0d1b2a',
        'chronix-blue': '#1a3a5c',
        'chronix-accent': '#1e6fff',
        'chronix-glow': '#4d9fff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(30, 111, 255, 0.35)',
        'glow-strong': '0 0 40px rgba(77, 159, 255, 0.55)',
      },
    },
  },
  plugins: [],
}
