import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function FloatingPoop() {
  const meshRef = useRef<Mesh>(null)

  // Animate the poop - floating and rotating
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={2} rotation={[0, 0, Math.PI / 2]}>
      <group>
        {/* Bottom sphere - medium */}
        <mesh position={[0, -1.5, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
        </mesh>
        
        {/* Second sphere - large */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
        </mesh>
        
        {/* Third sphere - small */}
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
        </mesh>
        
        {/* Fourth sphere - medium-large */}
        <mesh position={[0, 1.3, 0]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
        </mesh>
        
        {/* Fifth sphere - medium-small */}
        <mesh position={[0, 2.2, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
        </mesh>
        
        {/* Top sphere - tiny */}
        <mesh position={[0, 2.9, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} metalness={0.1} />
        </mesh>
      </group>
    </mesh>
  )
}

