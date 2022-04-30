import { Suspense } from "react";
import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/captain.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Line002001.geometry} material={materials['材质.005']} rotation={[Math.PI / 2, 0, 0]} />
        </group>
    )
}

export function Captain(props) {
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