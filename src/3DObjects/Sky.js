import React, { useEffect } from 'react'
import * as THREE from "three";

const tex_loader = new THREE.TextureLoader();
const checker_tex = tex_loader.load("/darkblue.png");

const geo = new THREE.SphereGeometry(256, 8, 4);
const mat = new THREE.MeshPhongMaterial({ map: checker_tex, side: THREE.BackSide });

export function Sky(props) {
    useEffect(() => {
        props.onFinish();
    }, []);

    return (
        <mesh
            // rotation-x={-Math.PI / 2}
            position={[0, 0, 90]}
            geometry={geo}
            material={mat}
        >
        </mesh>
    )
}