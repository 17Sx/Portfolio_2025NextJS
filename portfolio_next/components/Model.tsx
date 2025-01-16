import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useRef } from 'react';
import * as THREE from 'three';

export default function Model() {
  const { nodes } = useGLTF('noa.glb');
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  const { 
    pivotX, 
    pivotY, 
    pivotZ,
    rotationSpeed,
    showPivotHelper 
  } = useControls({
    pivotX: { value: 0, min: -5, max: 5, step: 0.1 },
    pivotY: { value: 0, min: -5, max: 5, step: 0.1 },
    pivotZ: { value: 0, min: -5, max: 5, step: 0.1 },
    rotationSpeed: { value: 0.00, min: -0.1, max: 0.1, step: 0.00 },
    showPivotHelper: true
  });

  const materialProps = useControls({
    thickness: { value: 3, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: false },
  });

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <Text 
        position={[0, 0, 0]} 
        fontSize={2} 
        color="white" 
        anchorX="center" 
        anchorY="middle"
      >
        Noa Obringer
      </Text>

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