import React, { useRef, useEffect, Suspense } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Model({ ...props }) {


    const group = useRef()
    const { scene, nodes, materials, animations } = useGLTF('/shark.glb')

    let mixer = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    });
    useFrame((state, delta) => {
        mixer.update(delta / 4);
        group.current.rotation.y -= 0.002;
    });

    // useFrame(({ clock }) => {
    //     group.current.position.x -= 0.05 * clock.getElapsedTime();
    // });
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[-7, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.56}>
                    <primitive object={nodes.Bone} />
                    <primitive object={nodes.Bone005} />
                    <group>
                        <skinnedMesh geometry={nodes.Cube001.geometry} material={materials['Material.005']} skeleton={nodes.Cube001.skeleton} />
                        <skinnedMesh geometry={nodes.Cube001_1.geometry} material={materials['Material.007']} skeleton={nodes.Cube001_1.skeleton} />
                        <skinnedMesh geometry={nodes.Cube001_2.geometry} material={materials['Material.008']} skeleton={nodes.Cube001_2.skeleton} />
                        <skinnedMesh geometry={nodes.Cube001_3.geometry} material={materials['Material.009']} skeleton={nodes.Cube001_3.skeleton} />
                        <skinnedMesh geometry={nodes.Cube001_4.geometry} material={materials['Material.010']} skeleton={nodes.Cube001_4.skeleton} />
                    </group>
                </group>
                <group position={[0.7, 5.66, 0]} />
                <group position={[-5, 2.75, 0]} rotation={[Math.PI, 0, Math.PI / 2]} />
                <group position={[5, 2.75, 0]} rotation={[0, 0, -Math.PI / 2]} />
            </group>
        </group>
    )
}

export function Shark(props) {
    return (
        <Suspense fallback={null}>
            <Model
                rotation={[0, Math.PI, 0]}
                position={[-5, -10.5, -60]}
                scale={15}
            />
        </Suspense>
    )
}