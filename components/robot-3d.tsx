'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function RobotModel() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }

    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.6;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2 + Math.PI) * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Body */}
      <group ref={bodyRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.6, 1, 0.4]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00ffff"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Chest panel */}
        <mesh position={[0, 0.05, 0.21]}>
          <boxGeometry args={[0.5, 0.6, 0.1]} />
          <meshStandardMaterial
            color="#003d5c"
            metalness={0.9}
            roughness={0.1}
            emissive="#00ffff"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Chest lights */}
        {[0.15, -0.15].map((y, i) => (
          <mesh key={`light-${i}`} position={[0, y, 0.27]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.8} />
          </mesh>
        ))}
      </group>

      {/* Head */}
      <group ref={headRef} position={[0, 0.8, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00ffff"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Eyes */}
        {[-0.12, 0.12].map((x, i) => (
          <mesh key={`eye-${i}`} position={[x, 0.08, 0.26]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial
              color="#ffff00"
              emissive="#ffff00"
              emissiveIntensity={1}
            />
          </mesh>
        ))}

        {/* Visor */}
        <mesh position={[0, -0.05, 0.26]}>
          <boxGeometry args={[0.35, 0.15, 0.05]} />
          <meshStandardMaterial
            color="#00aa88"
            metalness={0.9}
            roughness={0.1}
            emissive="#00ffff"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.35, 0.5, 0]}>
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.15, 0.6, 0.15]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00ffff"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Hand */}
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[0.2, 0.15, 0.2]} />
          <meshStandardMaterial
            color="#9d4edd"
            metalness={0.9}
            roughness={0.15}
            emissive="#9d4edd"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.35, 0.5, 0]}>
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.15, 0.6, 0.15]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#00ffff"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Hand */}
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[0.2, 0.15, 0.2]} />
          <meshStandardMaterial
            color="#ffd700"
            metalness={0.9}
            roughness={0.15}
            emissive="#ffd700"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Left Leg */}
      <mesh position={[-0.2, -0.6, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshStandardMaterial
          color="#003d5c"
          metalness={0.8}
          roughness={0.2}
          emissive="#00ffff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Right Leg */}
      <mesh position={[0.2, -0.6, 0]}>
        <boxGeometry args={[0.15, 0.4, 0.15]} />
        <meshStandardMaterial
          color="#003d5c"
          metalness={0.8}
          roughness={0.2}
          emissive="#00ffff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Aura glow */}
      <mesh position={[0, 0, 0]} scale={1.3}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.1}
          emissive="#00ffff"
          emissiveIntensity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

interface Robot3DProps {
  width?: string | number;
  height?: string | number;
}

export function Robot3D({ width = '100%', height = '100%' }: Robot3DProps) {
  return (
    <div style={{ width, height }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, 10, -10]} intensity={0.8} color="#00ffff" />
        <pointLight position={[0, -5, 5]} intensity={0.5} color="#9d4edd" />
        <RobotModel />
      </Canvas>
    </div>
  );
}
