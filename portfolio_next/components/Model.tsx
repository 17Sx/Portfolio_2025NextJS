import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export default function Model() {
  const { nodes } = useGLTF('model/noa.glb');
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [textOpacity, setTextOpacity] = useState(1);

  const pivotX = 0;
  const pivotY = 0;
  const pivotZ = 0;
  const rotationSpeed = 0.01;

  const materialProps = {
    thickness: 3,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.01,
    backside: false,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 300, 0);
      setTextOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  const [textColor, setTextColor] = useState(new THREE.Color('black'));

  useEffect(() => {
    const handleDarkMode = () => {
      if (document.body.classList.contains('dark')) {
        setTextColor(new THREE.Color('white'));
      } else {
        setTextColor(new THREE.Color('black'));
      }
    };

    handleDarkMode();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          handleDarkMode();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      childList: false,
      subtree: false,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const textMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: textOpacity,
    color: textColor,
  });

  return (
    <>
      <Text 
        position={[0, 2.5, 2.5]} 
        fontSize={1} 
        material={textMaterial}
        font='font/kholic.otf'
        fontWeight={700}
        anchorX="center" 
        anchorY="middle"
      >
        Creating solutions,
        one idea at a time.
      </Text>
      <Text 
        position={[0, -2.5, 2.5]} 
        fontSize={0.3} 
        material={textMaterial}
        font='font/kholic.otf'
        fontWeight={700}
        anchorX="center" 
        anchorY="middle"
      >
        Scroll gently!
      </Text>

      <group ref={groupRef}>
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
