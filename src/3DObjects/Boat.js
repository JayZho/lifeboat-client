import { Suspense } from "react";
import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/boat.glb')

    useFrame(({ clock }) => {
        group.current.position.y = 0.2 + 0.4 * Math.sin(clock.getElapsedTime() * 2);
        // matRef.current.emissiveIntensity = Math.sin(clock.getElapsedTime());
    });
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.99}>
                <group position={[0, 2.38, 1.7]} rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[Math.PI / 2, 0, 0]} />
                </group>
                <mesh geometry={nodes.Victorian_Row_Boat_Boat_Glossy_0.geometry} material={materials.Boat_Glossy} />
                <mesh geometry={nodes.Victorian_Row_Boat_Boat_Metal_0.geometry} material={materials.Boat_Metal} />
                <mesh geometry={nodes.Victorian_Row_Boat_Boat_Tex_0.geometry} material={materials.Boat_Tex} />
                <mesh geometry={nodes.Victorian_Row_Boat_Brillo_0.geometry} material={materials.Brillo} />
            </group>
        </group>
    )
}

export function Boat(props) {
    return (
        <Suspense fallback={null}>
            <Model
                rotation={[0, Math.PI / 2, 0]}
                scale={3}
                position={[0, 0.5, 55]}
            />
        </Suspense>
    )
}