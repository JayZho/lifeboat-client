import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/lauren.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Extract11.geometry} material={materials['材质.004']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.Extract10.geometry} material={materials['材质.004']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.Extract8.geometry} material={materials['材质.004']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.Extract7.geometry} material={materials['材质.005']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.Extract6.geometry} material={materials['材质.004']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.Extract2.geometry} material={materials['材质.006']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.FemaleHead5.geometry} material={materials['材质.007']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.FemaleHead4.geometry} material={materials['材质.005']} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
            <mesh geometry={nodes.FemaleHead2.geometry} material={nodes.FemaleHead2.material} position={[0, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.34} />
        </group>
    )
}

export function Lauren(props) {
    return (
        <Suspense fallback={null}>
            <Model
                {...props}
                rotation={[0, -Math.PI / 2, 0]}
                scale={2}
            />
        </Suspense>
    )
}