import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

// function Model({ onAnimationEnd }) {
//   const { scene, animations } = useGLTF('/models/scene.gltf');
//   const { actions } = useAnimations(animations, scene);

//   useEffect(() => {
//     if (actions && Object.keys(actions).length > 0) {
//       const firstAnimation = actions[Object.keys(actions)[0]];
//       firstAnimation.play();

//       const animationDuration = firstAnimation._clip.duration * 1000;
//       const timer = setTimeout(() => {
//         onAnimationEnd();
//       }, animationDuration);

//       return () => clearTimeout(timer);
//     }
//   }, [actions, onAnimationEnd]);

//   return <primitive object={scene} scale={0.65} position={[-0.5, 0.5, 0]} />;
// }
function Model({ onAnimationEnd }) {
  const { scene, animations } = useGLTF('/models/scene.gltf');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAnimation = actions[Object.keys(actions)[0]];
      firstAnimation.play();

      const animationDuration = firstAnimation._clip.duration * 1000;
      const timer = setTimeout(() => {
        onAnimationEnd();
      }, animationDuration);

      return () => clearTimeout(timer);
    }
  }, [actions, onAnimationEnd]);

  return <primitive object={scene} scale={0.68} position={[-0.15, 0.1, 1]} />;
}

export default function DancingModel() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="canvas-container" style={{ display: 'flex' }}>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 50 }}
        style={{
          width: 600,
          height: 800,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model onAnimationEnd={() => setShowForm(true)} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {showForm && (
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Message:
              <textarea name="message" rows="4" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}


