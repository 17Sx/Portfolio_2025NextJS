"use client";

import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { Environment } from '@react-three/drei';

export default function Scene() {
  return (
    <>
      <Canvas camera={{
          position: [0, 0, 10], 
          fov: 90, 
        }}>
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="city" />
      </Canvas>

    </>
  );
}
