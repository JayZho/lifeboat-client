import { Suspense, useEffect } from "react";
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
            <mesh geometry={nodes.Boat.geometry} material={materials.boat_mat} position={[1.19, 0.5, -1.55]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 3, 1.6]} />
        </group>
    )
}

export function Boat(props) {
    useEffect(() => {
        props.onFinish();
    }, []);

    return (
        <Model
            rotation={[0, Math.PI / 2, 0]}
            scale={3}
            position={[0, 0.5, 30]}
        />
    )
}