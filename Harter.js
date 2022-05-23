/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/harter.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['????'].geometry} material={materials.材质} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/harter.glb')