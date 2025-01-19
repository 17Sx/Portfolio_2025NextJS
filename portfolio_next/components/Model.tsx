import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Model() {
  const { nodes } = useGLTF('model/noa.glb');
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  const pivotX = 0;
  const pivotY = 0;
  const pivotZ = 0;
  const rotationSpeed = 0.01;

  const materialProps = {
    thickness: 3,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: false,
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
{/*     <Text 
        position={[0, 2.5, 2.5]} 
        fontSize={2} 
        color="black" 
        font='font/chrome.ttf'
        fontWeight={700}
        anchorX="center" 
        anchorY="middle"
      >
        Welcome to my portfolio.
      </Text>*/}


      {/* Groupe principal qui gère la rotation */}
      <group ref={groupRef}>
        {/* Groupe pour le point de pivot */}
        <group position={[pivotX, pivotY, pivotZ]}>
          {Object.values(nodes).map((node) => {
            if ((node as THREE.Mesh).isMesh) {
              const mesh = node as THREE.Mesh;
              return (
                <mesh 
                  key={mesh.uuid} 
                  geometry={mesh.geometry}
                  position={[0, 0, 0]}
                  rotation={mesh.rotation}
                  scale={mesh.scale}
                >
                  <MeshTransmissionMaterial {...materialProps} />
                </mesh>
              );
            }
            return null;
          })}
        </group>
      </group>
    </>
  );
}
