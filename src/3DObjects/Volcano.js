import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/volcano.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Tree02.geometry} material={nodes.Tree02.material} position={[-0.87, 1.05, -0.91]} scale={[1.79, 2.19, 1.79]} />
            <mesh geometry={nodes.Tree.geometry} material={nodes.Tree.material} position={[-0.58, 0.51, 2.7]} scale={[1.79, 2.19, 1.79]} />
            <group position={[-0.59, -0.55, 0.44]} scale={[3.21, 3.9, 3.21]}>
                <mesh geometry={nodes.Volcano_1.geometry} material={materials.Volcano} />
                <mesh geometry={nodes.Volcano_2.geometry} material={materials.Lava} />
                <mesh geometry={nodes.Volcano_3.geometry} material={materials.Ground} />
                <mesh geometry={nodes.Volcano_4.geometry} material={materials.VolcanoSecond} />
                <mesh geometry={nodes.Volcano_5.geometry} material={materials.GroundSecond} />
            </group>
        </group>
    )
}

export function Volcano(props) {
    return (
        <Suspense fallback={null}>
            <Model
                position={[20, -0.3, -7]}
                rotation-y={Math.PI * -0.5}
                scale={5}
            />
        </Suspense>
    )
}