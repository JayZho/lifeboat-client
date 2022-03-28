import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";

function Model({ ...props }) {
    const group = useRef()
    const { nodes } = useGLTF('/skybox.glb')


    // const top_color = new THREE.Color(0x7011fd);
    // const bottom_color = new THREE.Color(0xff3311);
    const top_color = new THREE.Color(0x120a59);
    const bottom_color = new THREE.Color(0x0e4558);

    let sky_colours = [];
    for (let layer = 0; layer < 9; layer++) {
        const layer_colour = new THREE.MeshBasicMaterial({ color: bottom_color.lerp(top_color, layer / 8) });
        sky_colours.push(layer_colour);
    }
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Sphere001.geometry} material={sky_colours[0]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere002.geometry} material={sky_colours[1]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere003.geometry} material={sky_colours[2]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere004.geometry} material={sky_colours[3]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere005.geometry} material={sky_colours[4]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere006.geometry} material={sky_colours[5]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere007.geometry} material={sky_colours[6]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere008.geometry} material={sky_colours[7]} scale={[1, 0.35, 1]}/>
            <mesh geometry={nodes.Sphere009.geometry} material={sky_colours[8]} scale={[1, 0.35, 1]}/>
        </group>
    )
}

export function Sky(props) {
    return (
        <Suspense fallback={null}>
            <Model
                position={[0, -0.2, 64]}
                rotation-y={Math.PI * -0.5}
                scale={128}
            />
        </Suspense>
    )
}