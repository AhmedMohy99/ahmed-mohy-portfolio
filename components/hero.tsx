'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Orb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.16;
    ref.current.rotation.y = state.clock.elapsedTime * 0.22;
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      (state.pointer.x || 0) * 0.35,
      0.03,
    );
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      (state.pointer.y || 0) * 0.25,
      0.03,
    );
  });

  return (
    <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.6}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.45, 3]} />
        <MeshTransmissionMaterial
          backside
          thickness={1.2}
          roughness={0.08}
          transmission={1}
          ior={1.35}
          chromaticAberration={0.08}
          anisotropy={0.3}
          color="#c9c3b7"
        />
        <mesh scale={1.02}>
          <icosahedronGeometry args={[1.45, 2]} />
          <meshBasicMaterial wireframe transparent opacity={0.18} />
        </mesh>
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        frameloop="demand"
        performance={{ min: 0.5, max: 1, debounce: 200 }}
      >
        <ambientLight intensity={1.4} />
        <pointLight position={[3, 3, 4]} intensity={18} />
        <pointLight position={[-4, -2, 2]} intensity={8} />
        <Orb />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
