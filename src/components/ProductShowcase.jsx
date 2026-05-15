import { Component, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Sparkles } from '@react-three/drei'

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.warn('ProductShowcase fallback active:', error?.message ?? error)
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null
    return this.props.children
  }
}

const PKG_SIZE = 2.4
const PKG_HEIGHT = 0.42
const PIN_LENGTH = 0.42
const PIN_COUNT_PER_SIDE = 11

function buildPins() {
  const pins = []
  const usable = PKG_SIZE - 0.4
  const spacing = usable / (PIN_COUNT_PER_SIDE - 1)
  const start = -usable / 2
  const edgeOffset = PKG_SIZE / 2 + PIN_LENGTH / 2 - 0.04

  for (let i = 0; i < PIN_COUNT_PER_SIDE; i++) {
    const offset = start + i * spacing
    // right (+X) and left (-X) sides — pins extend along X
    pins.push({
      key: `r-${i}`,
      position: [edgeOffset, 0, offset],
      args: [PIN_LENGTH, 0.06, 0.1],
    })
    pins.push({
      key: `l-${i}`,
      position: [-edgeOffset, 0, offset],
      args: [PIN_LENGTH, 0.06, 0.1],
    })
    // front (+Z) and back (-Z) sides — pins extend along Z
    pins.push({
      key: `f-${i}`,
      position: [offset, 0, edgeOffset],
      args: [0.1, 0.06, PIN_LENGTH],
    })
    pins.push({
      key: `b-${i}`,
      position: [offset, 0, -edgeOffset],
      args: [0.1, 0.06, PIN_LENGTH],
    })
  }
  return pins
}

function useChipScale() {
  const getScale = () => {
    const w = window.innerWidth
    if (w < 430) return 0.58
    if (w < 1024) return 0.76
    return 1
  }
  const [scale, setScale] = useState(getScale)
  useEffect(() => {
    const handle = () => setScale(getScale())
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [])
  return scale
}

function Core({ scale = 1 }) {
  const groupRef = useRef()
  const dieRef = useRef()
  const traceRefs = useRef([])

  const pins = useMemo(buildPins, [])
  const traces = useMemo(() => {
    // four glowing traces from the die out toward each side
    const half = PKG_SIZE / 2 - 0.18
    return [
      { key: 't-r', position: [half / 2 + 0.25, PKG_HEIGHT / 2 + 0.015, 0], args: [half - 0.25, 0.005, 0.06] },
      { key: 't-l', position: [-(half / 2 + 0.25), PKG_HEIGHT / 2 + 0.015, 0], args: [half - 0.25, 0.005, 0.06] },
      { key: 't-f', position: [0, PKG_HEIGHT / 2 + 0.015, half / 2 + 0.25], args: [0.06, 0.005, half - 0.25] },
      { key: 't-b', position: [0, PKG_HEIGHT / 2 + 0.015, -(half / 2 + 0.25)], args: [0.06, 0.005, half - 0.25] },
    ]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const px = state.pointer.x
    const py = state.pointer.y

    if (groupRef.current) {
      // mostly top-down view (chip face toward camera) with subtle mouse parallax
      const targetY = px * 0.25
      const targetX = -py * 0.18 + 1.2
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05
    }
    if (dieRef.current) {
      const pulse = 1.4 + Math.sin(t * 2.2) * 0.5
      dieRef.current.material.emissiveIntensity = pulse
    }
    traceRefs.current.forEach((m, i) => {
      if (!m) return
      const phase = i * 0.6
      m.material.emissiveIntensity = 0.6 + Math.abs(Math.sin(t * 1.4 + phase)) * 1.2
    })
  })

  return (
    <group ref={groupRef} scale={scale}>
      <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.45}>
        {/* Chip package — flat dark substrate */}
        <RoundedBox args={[PKG_SIZE, PKG_HEIGHT, PKG_SIZE]} radius={0.04} smoothness={4}>
          <meshStandardMaterial
            color="#0b0b14"
            metalness={0.4}
            roughness={0.65}
            emissive="#1e6fff"
            emissiveIntensity={0.04}
          />
        </RoundedBox>

        {/* Raised label plate on top */}
        <mesh position={[0, PKG_HEIGHT / 2 + 0.005, 0]}>
          <boxGeometry args={[PKG_SIZE - 0.2, 0.015, PKG_SIZE - 0.2]} />
          <meshStandardMaterial color="#11121c" metalness={0.5} roughness={0.55} />
        </mesh>

        {/* Glowing die window — the silicon */}
        <mesh ref={dieRef} position={[0, PKG_HEIGHT / 2 + 0.018, 0]}>
          <boxGeometry args={[0.85, 0.01, 0.85]} />
          <meshStandardMaterial
            color="#4d9fff"
            emissive="#7ab8ff"
            emissiveIntensity={1.4}
            toneMapped={false}
          />
        </mesh>

        {/* Inner die detail — darker grid square */}
        <mesh position={[0, PKG_HEIGHT / 2 + 0.024, 0]}>
          <boxGeometry args={[0.55, 0.005, 0.55]} />
          <meshStandardMaterial
            color="#0a1430"
            emissive="#1e6fff"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Circuit traces radiating from the die */}
        {traces.map((trace, i) => (
          <mesh
            key={trace.key}
            position={trace.position}
            ref={(el) => (traceRefs.current[i] = el)}
          >
            <boxGeometry args={trace.args} />
            <meshStandardMaterial
              color="#4d9fff"
              emissive="#4d9fff"
              emissiveIntensity={0.8}
              toneMapped={false}
            />
          </mesh>
        ))}

        {/* Pin 1 indicator dot */}
        <mesh
          position={[
            -(PKG_SIZE / 2 - 0.22),
            PKG_HEIGHT / 2 + 0.018,
            -(PKG_SIZE / 2 - 0.22),
          ]}
        >
          <cylinderGeometry args={[0.05, 0.05, 0.01, 24]} />
          <meshStandardMaterial
            color="#4d9fff"
            emissive="#4d9fff"
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>

        {/* Gold QFP pins on all four sides */}
        {pins.map((p) => (
          <mesh key={p.key} position={p.position}>
            <boxGeometry args={p.args} />
            <meshStandardMaterial
              color="#d8c177"
              metalness={0.95}
              roughness={0.28}
            />
          </mesh>
        ))}
      </Float>
    </group>
  )
}

function FallbackCore({ scale = 1 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })
  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial
        color="#1e6fff"
        emissive="#4d9fff"
        emissiveIntensity={1}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  )
}

function ParticleField() {
  // Subtle ambient particles around the core
  return useMemo(
    () => (
      <Sparkles
        count={80}
        scale={[10, 6, 5]}
        size={2.4}
        speed={0.35}
        color="#7ab8ff"
        opacity={0.7}
      />
    ),
    [],
  )
}

export default function ProductShowcase() {
  const chipScale = useChipScale()

  return (
    <section className="relative w-full h-[55vh] sm:h-[70vh] md:h-[90vh] min-h-[360px] sm:min-h-[480px] md:min-h-[640px] overflow-hidden border-y border-chronix-blue/30">
      {/* Atmospheric backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(30,111,255,0.22), transparent 55%), linear-gradient(to bottom, #03040a 0%, #050510 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(77,159,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(77,159,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', (e) => e.preventDefault(), false)
        }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[6, 4, 5]} intensity={3.2} color="#4d9fff" />
        <pointLight position={[-6, -3, 4]} intensity={2.4} color="#1e6fff" />
        <pointLight position={[0, -5, -4]} intensity={1.8} color="#7ab8ff" />
        <CanvasErrorBoundary fallback={<FallbackCore scale={chipScale} />}>
          <Core scale={chipScale} />
        </CanvasErrorBoundary>
        <ParticleField />
      </Canvas>

      {/* Overlay UI */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-mono text-4xl md:text-6xl lg:text-7xl text-chronix-glow text-glow tracking-wider leading-none">
              ChronixOS<sup className="text-lg md:text-2xl ml-2 opacity-70">™</sup>
            </h2>
            <div className="mt-3 text-[10px] md:text-xs tracking-[0.4em] text-slate-400 uppercase">
              Das Betriebssystem · neu gedacht
            </div>
          </div>
          <div className="hidden md:block text-right text-[10px] tracking-[0.3em] text-slate-500 max-w-[14rem] uppercase leading-relaxed">
            Kern v0.1 — entwickelt für Geschwindigkeit, Klarheit und Sicherheit
          </div>
        </div>

        <div className="flex items-end justify-between gap-6">
          <div className="text-[10px] tracking-[0.4em] text-slate-500 uppercase">
            01 / Hero · Core
          </div>
          <Link
            to="/os"
            className="pointer-events-auto px-6 py-3 border border-chronix-accent/60 hover:border-chronix-glow text-chronix-glow text-xs tracking-[0.3em] uppercase hover:bg-chronix-accent/10 hover:shadow-glow-blue transition-all"
          >
            Mehr erfahren →
          </Link>
        </div>
      </div>
    </section>
  )
}
