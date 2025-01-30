"use client";

import Model from './Model';
import { Environment, Text } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three'


interface SceneContentProps {
  text: string;
}

const SceneContent = ({ text }: SceneContentProps) => {
  const controlsRef = useRef<OrbitControls | null>(null);
  const textRef = useRef<any>(null);
  const { camera } = useThree();
  const initialRotation = useRef({ x: 0, y: 0, z: 0 });


  useEffect(() => {
    const resetRotation = () => {
      if (controlsRef.current) {
        gsap.to(camera.position, {
          x: initialRotation.current.x,
          y: initialRotation.current.y,
          z: 8,
          duration: 1,
          ease: "power2.out"
        });
      }
    };
    const controls = controlsRef.current;
    if (controls) {
      controls.addEventListener('end', resetRotation);
      return () => {
        controls.removeEventListener('end', resetRotation);
      };
    }
  }, [, camera.position]);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current.position, {
        y: -2,
        duration: 1,
        ease: "power2.out"
      });
      gsap.to(textRef.current.material, {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      });
    }
  }, [text]);

  useEffect(() => {
    const handleDarkMode = () => {
      if (document.body.classList.contains('dark')) {
        if (textRef.current) {
          textRef.current.material.color.set(0xffffff);
        }
      } else {
        if (textRef.current) {
          textRef.current.material.color.set(0x000000); 
        }
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

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <group>
        <Model />
        <Text
          ref={textRef}
          position={[0, 0, 5]} 
          fontSize={1}
          fillOpacity={0.9}
          font='font/kholic.otf'
          fontWeight={700}
          anchorX="center" 
          anchorY="middle"
          color="white"
        >
          {text}
        </Text>

      </group>

      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={false}
        enableDamping={true}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
      />
      <Environment preset="warehouse" />
    </>
  );
};

interface SceneProps {
  text: string;
}

const Scene = ({ text }: SceneProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 90 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <SceneContent text={text} />
      </Suspense>
    </Canvas>
  );
};

export default Scene;

