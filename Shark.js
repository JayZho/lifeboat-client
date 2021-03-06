/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/shark.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
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
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0, 0, -4.56]} scale={[10, 1, 5.03]} />
      </group>
    </group>
  )
}

useGLTF.preload('/shark.glb')
