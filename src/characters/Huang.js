import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/huang.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <mesh geometry={nodes.Extract2.geometry} material={materials['材质.004']} />
                <mesh geometry={nodes.Extract4.geometry} material={materials['材质.005']} />
                <mesh geometry={nodes.Extract5.geometry} material={materials.材质} />
                <mesh geometry={nodes.Extract7.geometry} material={materials['材质.004']} />
                <mesh geometry={nodes.FemaleHead1.geometry} material={materials['材质.003']} />
            </group>
        </group>
    )
}

export function Huang(props) {
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