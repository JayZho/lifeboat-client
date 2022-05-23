import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/stephen.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes['??'].geometry} material={materials.材质} position={[0, -0.46, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
            <mesh geometry={nodes['??001'].geometry} material={materials.材质} position={[0, -0.46, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        </group>
    )
}

export function Stephen(props) {
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