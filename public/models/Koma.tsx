import * as THREE from "three";
import React, { useRef } from "react";
import { Edges, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mold_right_ejector: THREE.Mesh;
    mold_right: THREE.Mesh;
    mold_left: THREE.Mesh;
    mold_left_ejector: THREE.Mesh;
  };
  materials: {
    Material_0: THREE.MeshStandardMaterial;
    Material_1: THREE.MeshStandardMaterial;
    Material_2: THREE.MeshStandardMaterial;
    Material_3: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/models/koma_bld.glb") as unknown as GLTFResult;
  return (
    <>
    {/* @ts-ignore */}
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.mold_right_ejector.geometry}
          material={materials.Material_0}
        >
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh
          geometry={nodes.mold_right.geometry}
          material={materials.Material_1}
        >
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.mold_left.geometry} material={materials.Material_2}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh
          geometry={nodes.mold_left_ejector.geometry}
          material={materials.Material_3}
        >
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/models/koma_bld.glb");
