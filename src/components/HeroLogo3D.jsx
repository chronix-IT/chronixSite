import { Component, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { TextureLoader } from 'three'
import chronixLogo from '../assets/chronix.png'

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.warn('HeroLogo3D fallback active:', error?.message ?? error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null
    }
    return this.props.children
  }
}

function LogoPlane({ texture }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial
          map={texture}
          transparent
          emissive="#1e6fff"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

function FallbackLogo() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <torusGeometry args={[1.2, 0.35, 32, 96]} />
        <meshStandardMaterial
          color="#1e6fff"
          emissive="#4d9fff"
          emissiveIntensity={0.6}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  const [texture, setTexture] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    const loader = new TextureLoader()
    loader.load(
      chronixLogo,
      (tex) => {
        if (!cancelled) setTexture(tex)
      },
      undefined,
      () => {
        if (!cancelled) setFailed(true)
      },
    )
    return () => {
      cancelled = true
    }
  }, [])

  if (failed || !texture) {
    return <FallbackLogo />
  }
  return <LogoPlane texture={texture} />
}

export default function HeroLogo3D() {
  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#4d9fff" />
        <pointLight position={[-5, -3, 4]} intensity={1.2} color="#1e6fff" />
        <CanvasErrorBoundary fallback={<FallbackLogo />}>
          <Scene />
        </CanvasErrorBoundary>
      </Canvas>
    </div>
  )
}
