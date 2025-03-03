"use client";

import { Canvas } from '@react-three/fiber'
import { MeshTransmissionMaterial, useGLTF, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

function Model() {
    const group = useRef<Group>(null)
    const { scene } = useGLTF('model/404.glb')

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
    }

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.5 
        }
    })

    // Clone and modify the scene to apply the transmission material
    const clonedScene = scene.clone()
    clonedScene.traverse((node: any) => {
        if (node.isMesh) {
            node.material = <MeshTransmissionMaterial {...materialProps} />
        }
    })

    return (
        <group ref={group}>
            <primitive object={clonedScene} />
        </group>
    )
}

export default function Scene404() {
    return (
        <Canvas
            className='canvas-404'
            camera={{ position: [0, 0, 5], fov: 90 }}
            style={{ width: '100%', height: '100%' }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model />
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}
