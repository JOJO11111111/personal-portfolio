// ContactForm.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import LaptopModel from './LaptopModel';

export default function ContactForm() {
  return (
    // <div style={{ position: 'relative' }}>
    //   {/* Canvas container for 3D models */}
    //   <div
    //     className="canvas-container"
    //     style={{
    //       height: '500px',
    //       position: 'absolute',
    //       top: 0,
    //       width: '100%',
    //       zIndex: 2,
    //       pointerEvents: 'none',
    //     }}
    //   >




    //     <Canvas>
    //       <ambientLight intensity={0.5} />
    //       <Physics gravity={[0, -20, 0]}>
    //         {/* Invisible ground plane */}
    //         <RigidBody type="fixed" colliders="hull" position={[0, -5, 0]}>
    //           <mesh position={[0, -1, 0]}>
    //             <boxGeometry args={[35, 0, 35]} />
    //             {/* <meshBasicMaterial visible={false} /> */}
    //           </mesh>
    //         </RigidBody>

    //         {/* Single LaptopModel instance */}
    //         <RigidBody
    //           position={[0, 10, -15]} // Start dropping from above the ground
    //           colliders="hull"
    //           restitution={1} // Add slight bounce
    //         >
    //           <LaptopModel />
    //         </RigidBody>
    //       </Physics>
    //     </Canvas> 


    //   </div>

    <div
      className="contact-form"
      style={{
        zIndex: 1,
        position: 'relative',
        marginTop: '10px',
      }}
    >
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
    // </div>
  );
}
