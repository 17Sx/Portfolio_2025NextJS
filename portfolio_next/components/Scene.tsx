"use client";

import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';

export default function Scene() {
  return (
    <>
      <Canvas
      style={{
        height: '100vh',
      }}
     camera={{
          position: [0, 0, 8], 
          fov: 90, 
        }}>
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="city" />
      </Canvas>

    </>
  );
}
