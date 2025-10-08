import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FloatingPoop } from './FloatingPoop'
import './PoopScene.css'

interface PoopSceneProps {
  amazonUrl: string
}

export function PoopScene({ amazonUrl }: PoopSceneProps) {
  const handleClick = () => {
    window.open(amazonUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="poop-scene-container" onClick={handleClick}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        style={{ cursor: 'pointer' }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <FloatingPoop />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}

