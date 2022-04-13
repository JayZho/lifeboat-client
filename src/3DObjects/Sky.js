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
    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes['GeoSphere001_10_-_Default_0'].geometry} material={materials['10_-_Default']} />
            </group>
        </group>
    )
}

const geo = new THREE.IcosahedronGeometry(156, 16);
const mat = new THREE.MeshPhongMaterial({color: 0x04020d, side: THREE.BackSide});

export function Sky(props) {
    return (
        // <Suspense fallback={null}>
        //     <Model
        //         position={[0, 0, 70]}
        //         scale={0.036}
        //     />
        // </Suspense>
        <mesh
            // rotation-x={-Math.PI / 2}
            position={[0, 0, -5]}
            geometry={geo}
            material={mat}
        >
            {/* <planeBufferGeometry
                args={[10, 10]}
            />
            <rawShaderMaterial
                attach="material"
                {...shaderInfo}
            /> */}
            
        </mesh>
    )
}