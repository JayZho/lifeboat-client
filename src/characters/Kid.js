import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/kid.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.male_zbrush.geometry} material={materials.材质} rotation={[Math.PI / 2, 0, 0]} scale={0.06} />
        </group>
    )
}

export function Kid(props) {
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