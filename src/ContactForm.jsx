// ContactForm.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import LaptopModel from './LaptopModel';
import HeadModel from './HeadModel';

export default function ContactForm() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Canvas container for 3D models
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Physics gravity={[0, -9.81, 0]}>
            <RigidBody position={[0, 5, 0]} colliders="hull">
              <LaptopModel />
            </RigidBody>
            <RigidBody position={[2, 5, 0]} colliders="hull">
              <HeadModel />
            </RigidBody>
          </Physics>
        </Canvas>
      </div> */}

      {/* Contact form container */}
      {/* <div className="contact-form"> */}
      <div className='contact-form'>
        <h2>Leave a Message</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div >
  );
}
