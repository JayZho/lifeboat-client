import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/mate.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes['??'].geometry} material={materials.材质} position={[0, -10.97, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.17} />
        </group>
    )
}

export function Mate(props) {
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