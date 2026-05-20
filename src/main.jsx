import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Suppress known R3F/Three.js version-mismatch warnings that can't be fixed upstream.
// THREE.Clock: deprecated in three r168, but R3F 9.x still uses it internally.
// Context Lost: expected when Canvas unmounts on navigation; restored automatically.
const _warn = console.warn.bind(console)
console.warn = (...args) => {
  const msg = String(args[0] ?? '')
  if (
    msg.includes('THREE.Clock: This module has been deprecated') ||
    msg.includes('THREE.WebGLRenderer: Context Lost')
  ) return
  _warn(...args)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
