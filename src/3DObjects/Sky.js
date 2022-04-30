import { Suspense } from "react";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";

const vertexShader = `
    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;
    attribute vec3 position;
    varying float colourRatio;

    void main() {
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        colourRatio = position.y / 1.0;
    }
`;

const fragmentShader = `
    precision mediump float;
    uniform vec3 colortop;
    uniform vec3 colorbottom;
    varying float colourRatio;

    void main()
    {
        vec3 color = mix(colortop, colorbottom, colourRatio);
        gl_FragColor = vec4(color, 1.0);
    }
`;

const shaderInfo = {
    fragmentShader,
    vertexShader,
    uniforms:
    {
        colortop: { value: new THREE.Color(0x2320cf) },
        colorbottom: { value: new THREE.Color(0x9100af) },
    }
};

const matt = <meshPhongMaterial
    color={new THREE.Color(0x0260cd)}
    flatShading={true}
    shininess={0}
    emmisive={0x7799aa}
/>

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/sky.glb')


    const tex_loader = new THREE.TextureLoader();
    const checker_tex = tex_loader.load("/darkblue.png");
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Sphere.geometry} material={new THREE.MeshPhongMaterial({ map: checker_tex })} />
        </group>
    )
}

const tex_loader = new THREE.TextureLoader();
const checker_tex = tex_loader.load("/darkblue.png");

const geo = new THREE.SphereGeometry(156, 16, 4);
const mat = new THREE.MeshPhongMaterial({ map: checker_tex, side: THREE.BackSide });

export function Sky(props) {
    return (
        // <Suspense fallback={null}>
        //     <Model
        //         position={[0, 0, 0]}
        //         scale={100}
        //     />
        // </Suspense>
        <mesh
            // rotation-x={-Math.PI / 2}
            position={[0, 0, 60]}
            geometry={geo}
            material={mat}
        >
        </mesh>
    )
}