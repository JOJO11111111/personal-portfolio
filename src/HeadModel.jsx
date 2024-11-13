// HeadModel.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function HeadModel() {
  const { scene } = useGLTF('/models/minecraft_hacker_head/scene.gltf');
  return <primitive object={scene} scale={0.2} />;
}
