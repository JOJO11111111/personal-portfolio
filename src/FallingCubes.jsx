// FallingCubes.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { useGLTF } from '@react-three/drei';

// Custom Laptop model
function LaptopModel({ position }) {
  const { scene } = useGLTF('/models/laptop/scene.gltf');
  return (
    <RigidBody position={position} colliders="hull">
      <primitive object={scene} scale={0.08} />
    </RigidBody>
  );
}

// Custom Head model
function HeadModel({ position }) {
  const { scene } = useGLTF('/models/minecraft_hacker_head/scene.gltf');
  return (
    <RigidBody position={position} colliders="hull">
      <primitive object={scene} scale={0.2} />
    </RigidBody>
  );
}

export default function FallingCubes() {
  return (
    <Canvas
      style={{ width: '100%', height: '400px', backgroundColor: 'transparent' }}
      camera={{ position: [0, 5, 10], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Physics gravity={[0, -9.81, 0]}>
          {/* Only your custom models */}
          <LaptopModel position={[1, 10, 0]} />  {/* Adjust position as needed */}
          <HeadModel position={[-1, 12, 0]} />   {/* Adjust position as needed */}
        </Physics>
      </Suspense>
    </Canvas>
  );
}
