/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Edges, Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    handle: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
  };
  materials: {
    toaster_black: THREE.MeshStandardMaterial;
    bread_plain: THREE.MeshStandardMaterial;
    bread_ear: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const toast = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/models/hero003.glb") as unknown as GLTFResult;
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    //Hole Animation
    group.current?.rotation.set(0, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    group.current!.position.y = (1 + Math.sin(t * 2)) / 10
    //Toast Animation
    
    
  })
  const [hidden, setVisible] = useState(false)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.21, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
        >
            <meshStandardMaterial transparent/>
            <Edges/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
        >
            <meshStandardMaterial transparent/>
            <Edges/>
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        position={[0.55, -0.09, 0]}
      >
          <meshStandardMaterial transparent/>
            <Edges/>
      </mesh>
      <group position={[0, -0.09, 0.17]} ref={toast}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.bread_plain}
        >
            <Html
                style={{
                transition: 'all 0.2s',
                opacity: 1,
                transform: `scale(${hidden ? 0.5 : 1})`
                }}
                distanceFactor={4}
                position={[0, 2, 0.1]}
                transform
                occlude>
                <span>Size</span>
            </Html>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
        >
            <meshStandardMaterial transparent/>
            <Edges/>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/hero003.glb");