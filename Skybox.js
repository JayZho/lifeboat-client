/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/skybox.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere001.geometry} material={nodes.Sphere001.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere002.geometry} material={nodes.Sphere002.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere003.geometry} material={nodes.Sphere003.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere004.geometry} material={nodes.Sphere004.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere005.geometry} material={nodes.Sphere005.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere006.geometry} material={nodes.Sphere006.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere007.geometry} material={nodes.Sphere007.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere008.geometry} material={nodes.Sphere008.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere009.geometry} material={nodes.Sphere009.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere010.geometry} material={nodes.Sphere010.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere011.geometry} material={nodes.Sphere011.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere012.geometry} material={nodes.Sphere012.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere013.geometry} material={nodes.Sphere013.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere014.geometry} material={nodes.Sphere014.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere015.geometry} material={nodes.Sphere015.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere016.geometry} material={nodes.Sphere016.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere017.geometry} material={nodes.Sphere017.material} scale={[1, 0.71, 1]} />
      <mesh geometry={nodes.Sphere018.geometry} material={nodes.Sphere018.material} scale={[1, 0.71, 1]} />
    </group>
  )
}

useGLTF.preload('/skybox.glb')