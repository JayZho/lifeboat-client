import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Model({ ...props }) {
    const group = useRef()
    const { nodes } = useGLTF('/cloudClose.glb')

    const cloudMat = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        // emissive: 0xaaaaaa,
    });

    useFrame((_) => {
        group.current.rotation.y -= 0.0003;
    });
    return (
        <group ref={group} {...props} dispose={null} castShadow={true}>
            <mesh geometry={nodes.Icosphere003.geometry} material={cloudMat} position={[2, 2, -15]} rotation={[0, 1.8, Math.PI]} scale={0.25} />
            <mesh geometry={nodes.Icosphere004.geometry} material={cloudMat} position={[0, 3.2, -15.8]} rotation={[0, 1, 0]} scale={0.25} />
            <mesh geometry={nodes.Icosphere005.geometry} material={cloudMat} position={[-13, 3.6, 0]} rotation={[-Math.PI, -0.4, 0]} scale={0.2} />
            <mesh geometry={nodes.Icosphere006.geometry} material={cloudMat} position={[0, 2, 13.6]} rotation={[-3.14, 1.02, 0]} scale={0.2} />
            <mesh geometry={nodes.Icosphere006.geometry} material={cloudMat} position={[8, 2.6, -13.6]} rotation={[-3.14, 1.5, 0]} scale={0.2} />
            <mesh geometry={nodes.Icosphere007.geometry} material={cloudMat} position={[12, 3.6, 12]} rotation={[-Math.PI, 0, 0]} scale={0.2} />
            <mesh geometry={nodes.Icosphere007.geometry} material={cloudMat} position={[-12, 2, -12]} rotation={[-Math.PI, 0.2, 0]} scale={0.2} />
            <mesh geometry={nodes.Icosphere009.geometry} material={cloudMat} position={[12, 0, 0]} rotation={[0, -0.3, 0]} scale={0.2} />
            <mesh geometry={nodes.Icosphere009.geometry} material={cloudMat} position={[-13, 0, -6]} rotation={[0, -0.8, 0]} scale={0.2} />
            <mesh geometry={nodes.Icosphere004.geometry} material={cloudMat} position={[10, 1.2, 10.8]} rotation={[0, 1.8, 0]} scale={0.25} />

            <mesh geometry={nodes.Icosphere003.geometry} material={cloudMat} position={[-10, 1.4, 10]} rotation={[0, 1.4, Math.PI]} scale={0.25} />
            <mesh geometry={nodes.Icosphere009.geometry} material={cloudMat} position={[-12, 0, 8]} rotation={[0, 0.2, 0]} scale={0.2} />
        </group>
    )
}

export function Clouds(props) {
    return (
        <Suspense fallback={null}>
            <Model
                position={[0, 10, 25]}
                scale={2.5}
            />
        </Suspense>
    )
}