'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Sparkles, TorusKnot } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function Sculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reducedMotion) group.current.rotation.y += delta * 0.16;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, reducedMotion ? 0 : state.pointer.y * 0.06, 0.025);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, reducedMotion ? 0 : state.pointer.x * 0.28, 0.025);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, reducedMotion ? 0 : state.pointer.y * 0.18, 0.025);
  });

  return (
    <Float enabled={!reducedMotion} speed={0.75} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={group}>
        <mesh rotation={[0.35, 0, 0]}>
          <icosahedronGeometry args={[1.55, 4]} />
          <MeshTransmissionMaterial backside thickness={1.8} roughness={0.12} transmission={1} ior={1.42} chromaticAberration={0.035} anisotropy={0.55} color="#d8d0bf" />
        </mesh>
        <TorusKnot args={[1.82, 0.045, 160, 10, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#b9aa8e" metalness={0.9} roughness={0.2} emissive="#3b3328" emissiveIntensity={0.35} />
        </TorusKnot>
        <mesh scale={1.035}>
          <icosahedronGeometry args={[1.55, 2]} />
          <meshBasicMaterial color="#f1eadb" wireframe transparent opacity={0.12} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 3, 4]} intensity={15} />
      <pointLight position={[-4, -2, 2]} intensity={6} />
      <spotLight position={[0, 5, 4]} intensity={10} angle={0.45} penumbra={1} />
      <Sculpture reducedMotion={reducedMotion} />
      {!reducedMotion && <Sparkles count={70} scale={7} size={1.4} speed={0.18} opacity={0.28} />}
      <Environment preset="studio" />
    </>
  );
}

export function Hero3D({ disabled = false }: { disabled?: boolean }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  if (disabled) return <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(185,170,142,.22),transparent_35%),linear-gradient(135deg,#1b1a18,#2a2721)]" aria-hidden="true" />;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 40 }}
        dpr={[1, 1.35]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        performance={{ min: 0.55, max: 1, debounce: 180 }}
      >
        <Scene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
