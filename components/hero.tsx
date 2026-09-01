'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
function Orb(){const ref=useRef<THREE.Mesh>(null);useFrame((s)=>{if(ref.current){ref.current.rotation.x=s.clock.elapsedTime*.16;ref.current.rotation.y=s.clock.elapsedTime*.22;ref.current.position.x=THREE.MathUtils.lerp(ref.current.position.x,(s.pointer.x||0)*.35,.03);ref.current.position.y=THREE.MathUtils.lerp(ref.current.position.y,(s.pointer.y||0)*.25,.03)}});return <Float speed={1.2} rotationIntensity={.45} floatIntensity={.6}><mesh ref={ref}><icosahedronGeometry args={[1.45,5]}/><MeshTransmissionMaterial backside thickness={1.2} roughness={.08} transmission={1} ior={1.35} chromaticAberration={.08} anisotropy={.3} color="#c9c3b7"/><mesh scale={1.02}><icosahedronGeometry args={[1.45,3]}/><meshBasicMaterial wireframe transparent opacity={.18}/></mesh></mesh></Float>}
export function Hero3D(){return <div className="absolute inset-0"><Canvas camera={{position:[0,0,5],fov:42}} dpr={[1,1.5]} gl={{antialias:true,alpha:true}}><ambientLight intensity={1.4}/><pointLight position={[3,3,4]} intensity={18}/><pointLight position={[-4,-2,2]} intensity={8}/><Orb/><Environment preset="city"/></Canvas></div>}
