import { MeshTransmissionMaterial, useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';

export default function Model() {
  const { nodes } = useGLTF('model/noa.glb');
  const { viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const [textOpacity, setTextOpacity] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const pivotX = 0;
  const pivotY = 0;
  const pivotZ = 0;
  const rotationSpeed = 0.002;

  const materialProps = {
    thickness: 2,
    roughness: 0,        
    transmission: 1,
    ior: 1.5,         
    chromaticAberration: 0.04,
    backside: true,     
    clearcoat: 1,       
    transparent: true,  
    opacity: 0.9,       
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

  useEffect(() => {
    const handleDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark'));
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

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  const gradientShader = useMemo(() => {
    return {
      uniforms: {
        opacity: { value: 1.0 },
        isDarkMode: { value: false },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float opacity;
        uniform bool isDarkMode;
        varying vec2 vUv;
        void main() {
          vec3 color1;
          vec3 color2;
          
          if (isDarkMode) {
            color2 = vec3(1.0, 1.0, 1.0); // Blanc
            color1 = vec3(1.0, 1.0, 1.0); // Blanc
          } else {
            color1 = vec3(0.0, 0.0, 0.0); // Noir
            color2 = vec3(0.0, 0.0, 0.0); // Noir
          }
          
          vec3 finalColor = mix(color1, color2, vUv.x);
          gl_FragColor = vec4(finalColor, opacity);
        }
      `
    };
  }, []);

  const textMaterial = new THREE.ShaderMaterial({
    ...gradientShader,
    transparent: true,
    uniforms: {
      ...gradientShader.uniforms,
      opacity: { value: textOpacity },
      isDarkMode: { value: isDarkMode }
    }
  });

  return (
    <>
      <Text 
        position={[0, 3, -3]} 
        fontSize={5} 
        material={textMaterial}
        font='font/kholic.otf'
        fontWeight={700}
        anchorX="center" 
        anchorY="middle"
      >
        Creating solutions,
      </Text>
      <Text 
        position={[0, -2, -3]} 
        fontSize={5} 
        material={textMaterial}
        font='font/kholic.otf'
        fontWeight={700}
        anchorX="center" 
        anchorY="middle"
      >
        one idea at a time.
      </Text>
      <Text 
        position={[0, -1.5, 5]} 
        fontSize={0.2} 
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
                  position={[0, 2, 0]}
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
