import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";

function Model({ ...props }) {
    const group = useRef()
    const { nodes } = useGLTF('/skybox.glb')


    // const top_color = new THREE.Color(0x7011fd);
    // const bottom_color = new THREE.Color(0xff3311);
    const top_color = new THREE.Color(0xa20a59);
    const bottom_color = new THREE.Color(0xaddddd);

    let sky_colours = [];
    for (let layer = 0; layer < 18; layer++) {
        const layer_colour = new THREE.MeshBasicMaterial({ color: bottom_color.lerp(top_color, layer / 20) });
        sky_colours.push(layer_colour);
        // console.log(layer_colour);
    }
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Sphere001.geometry} material={sky_colours[0]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere002.geometry} material={sky_colours[1]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere003.geometry} material={sky_colours[2]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere004.geometry} material={sky_colours[3]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere005.geometry} material={sky_colours[4]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere006.geometry} material={sky_colours[5]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere007.geometry} material={sky_colours[6]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere008.geometry} material={sky_colours[7]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere009.geometry} material={sky_colours[8]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere010.geometry} material={sky_colours[9]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere011.geometry} material={sky_colours[10]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere012.geometry} material={sky_colours[11]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere013.geometry} material={sky_colours[12]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere014.geometry} material={sky_colours[13]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere015.geometry} material={sky_colours[14]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere016.geometry} material={sky_colours[15]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere017.geometry} material={sky_colours[16]} scale={[1, 0.71, 1]} />
            <mesh geometry={nodes.Sphere018.geometry} material={sky_colours[17]} scale={[1, 0.71, 1]} />
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