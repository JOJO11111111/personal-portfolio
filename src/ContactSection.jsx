// ContactSection.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import LaptopModel from './LaptopModel'; // Import laptop model
import HeadModel from './HeadModel'; // Import head model
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" style={{ position: 'relative', marginTop: '20px' }}>
      <h2>Contact</h2>

      {/* Canvas wrapper for falling cubes */}
      <div
        className="canvas-wrapper"
        style={{
          position: 'absolute',
          top: '40px', // Adjust as needed to start cubes right below title
          width: '100%',
          height: '300px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <Physics gravity={[0, -9.81, 0]}>
            {/* Falling models */}
            <RigidBody position={[0, 5, 0]} colliders="hull">
              <LaptopModel />
            </RigidBody>
            <RigidBody position={[2, 5, 0]} colliders="hull">
              <HeadModel />
            </RigidBody>
          </Physics>
        </Canvas>
      </div>

      {/* Contact form below the canvas */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: '340px' }}>
        <ContactForm />
      </div>
    </section>
  );
}
