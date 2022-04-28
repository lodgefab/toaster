/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { Edges, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    gacha_1: THREE.Mesh
    gacha_2: THREE.Mesh
    gacha_3: THREE.Mesh
  }
  materials: {
    diffuse_179_179_179_255: THREE.MeshStandardMaterial
    diffuse_160_160_160_255: THREE.MeshStandardMaterial
    diffuse_246_246_243_255: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/gacha.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.3} >
        <mesh geometry={nodes.gacha_1.geometry} >
          <meshStandardMaterial transparent/>
          <Edges />
        </mesh>
        <mesh geometry={nodes.gacha_2.geometry}>
          <meshStandardMaterial transparent/>
          <Edges />
        </mesh>
        <mesh geometry={nodes.gacha_3.geometry}>
          <meshStandardMaterial transparent/>
          <Edges />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/gacha.glb')
