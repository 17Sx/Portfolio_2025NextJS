"use client";

import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

function Model() {
    const group = useRef<Group>(null)
    const { scene } = useGLTF('model/404.glb')

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.5 // Vitesse de rotation
        }
    })

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}

export default function Scene404() {
    return (
    <Canvas
    className='canvas-404'
      camera={{ position: [0, 0, 2], fov: 90 }}
      style={{ width: '100%', height: '100%' }}
    >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Model />
                <OrbitControls enableZoom={false} />
            </Canvas>
    )
}