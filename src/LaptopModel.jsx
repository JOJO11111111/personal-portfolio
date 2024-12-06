// LaptopModel.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function LaptopModel() {
  const { scene } = useGLTF('/models/laptop/scene.gltf');
  return <primitive object={scene} scale={0.58} />;
}
