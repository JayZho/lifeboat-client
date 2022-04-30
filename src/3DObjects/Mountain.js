import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/art.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes['norway_02_-_Default_0'].geometry} material={materials['Material.002']} scale={[1, 1, 1.4]} />
        </group>
    )
}

export function Mountain(props) {
    return (
        <Suspense fallback={null}>
            <Model
                rotation={[- Math.PI / 2, 0, -Math.PI * 0.4]}
                scale={0.028}
                position={[0, -5, -56]}
            />
        </Suspense>
    )
}