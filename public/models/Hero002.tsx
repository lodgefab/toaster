/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { Edges, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Fillet3: THREE.Mesh;
    Fillet3_2: THREE.Mesh;
    Fillet3_3: THREE.Mesh;
    Fillet3_4: THREE.Mesh;
    ["Cut-Extrude2_4"]: THREE.Mesh;
    ["Cut-Extrude2_5"]: THREE.Mesh;
    ["Cut-Extrude2_6"]: THREE.Mesh;
    ["Cut-Extrude2_7"]: THREE.Mesh;
    Imported1_103: THREE.Mesh;
    Imported1_105: THREE.Mesh;
    Imported1_107: THREE.Mesh;
    Imported1_93: THREE.Mesh;
    Object_1: THREE.Mesh;
    Object_2: THREE.Mesh;
    ["Boss-Extrude1_6"]: THREE.Mesh;
    Fillet1_5: THREE.Mesh;
    ["Cut-Extrude1"]: THREE.Mesh;
    Object_3: THREE.Mesh;
    ["????????_??????2"]: THREE.Mesh;
    ["??????????7"]: THREE.Mesh;
    ["Boss-Extrude1"]: THREE.Mesh;
    ["Boss-Extrude17"]: THREE.Mesh;
    ["Boss-Extrude1_4"]: THREE.Mesh;
    ["Boss-Extrude1_5"]: THREE.Mesh;
    ["Boss-Extrude1_7"]: THREE.Mesh;
    Chamfer1_8: THREE.Mesh;
    Chamfer2: THREE.Mesh;
    ["Cut-Extrude27"]: THREE.Mesh;
    ["Cut-Extrude3_2"]: THREE.Mesh;
    ["Cut-Extrude4"]: THREE.Mesh;
    ["Cut-Extrude7_2"]: THREE.Mesh;
    Fillet1_2: THREE.Mesh;
    Fillet1_3: THREE.Mesh;
    Fillet1_4: THREE.Mesh;
    Fillet1_6: THREE.Mesh;
    Fillet2: THREE.Mesh;
    Fillet4: THREE.Mesh;
    Fillet4_2: THREE.Mesh;
    Imported1_122: THREE.Mesh;
    Imported1_123: THREE.Mesh;
    Imported1_28: THREE.Mesh;
    Imported1_31: THREE.Mesh;
    Imported1_70: THREE.Mesh;
    Marquardt_19011103step3: THREE.Mesh;
    Marquardt_19011103step_2: THREE.Mesh;
    Marquardt_19011103step_3: THREE.Mesh;
    Imported1_136: THREE.Mesh;
    Imported1_137: THREE.Mesh;
    Imported1_14: THREE.Mesh;
    Imported1_7: THREE.Mesh;
    Imported1_74: THREE.Mesh;
    Imported1_81: THREE.Mesh;
    Imported1_83: THREE.Mesh;
    Imported1_90: THREE.Mesh;
    ["Boss-Extrude6"]: THREE.Mesh;
    Chamfer2_3: THREE.Mesh;
    ["Cut-Extrude3"]: THREE.Mesh;
    ["Cut-Extrude5"]: THREE.Mesh;
    ["Cut-Extrude7"]: THREE.Mesh;
    Fillet1: THREE.Mesh;
    Fillet2_2: THREE.Mesh;
    Fillet6_2: THREE.Mesh;
    Imported1_85: THREE.Mesh;
    Imported1_89: THREE.Mesh;
    Fillet3001: THREE.Mesh;
    Fillet3_2001: THREE.Mesh;
    Fillet3_3001: THREE.Mesh;
    Fillet3_4001: THREE.Mesh;
    ["Cut-Extrude2_4001"]: THREE.Mesh;
    ["Cut-Extrude2_5001"]: THREE.Mesh;
    ["Cut-Extrude2_6001"]: THREE.Mesh;
    ["Cut-Extrude2_7001"]: THREE.Mesh;
    Imported1_103001: THREE.Mesh;
    Imported1_105001: THREE.Mesh;
    Imported1_107001: THREE.Mesh;
    Imported1_93001: THREE.Mesh;
    Object_1001: THREE.Mesh;
    Object_2001: THREE.Mesh;
    ["Boss-Extrude1_6001"]: THREE.Mesh;
    Fillet1_5001: THREE.Mesh;
    ["Cut-Extrude1001"]: THREE.Mesh;
    Object_3001: THREE.Mesh;
    ["????????_??????2001"]: THREE.Mesh;
    ["??????????7001"]: THREE.Mesh;
    ["Boss-Extrude1001"]: THREE.Mesh;
    ["Boss-Extrude17001"]: THREE.Mesh;
    ["Boss-Extrude1_4001"]: THREE.Mesh;
    ["Boss-Extrude1_5001"]: THREE.Mesh;
    ["Boss-Extrude1_7001"]: THREE.Mesh;
    Chamfer1_8001: THREE.Mesh;
    Chamfer2001: THREE.Mesh;
    ["Cut-Extrude27001"]: THREE.Mesh;
    ["Cut-Extrude3_2001"]: THREE.Mesh;
    ["Cut-Extrude4001"]: THREE.Mesh;
    ["Cut-Extrude7_2001"]: THREE.Mesh;
    Fillet1_2001: THREE.Mesh;
    Fillet1_3001: THREE.Mesh;
    Fillet1_4001: THREE.Mesh;
    Fillet1_6001: THREE.Mesh;
    Fillet2001: THREE.Mesh;
    Fillet4001: THREE.Mesh;
    Fillet4_2001: THREE.Mesh;
    Imported1_122001: THREE.Mesh;
    Imported1_123001: THREE.Mesh;
    Imported1_28001: THREE.Mesh;
    Imported1_31001: THREE.Mesh;
    Imported1_70001: THREE.Mesh;
    Marquardt_19011103step3001: THREE.Mesh;
    Marquardt_19011103step_2001: THREE.Mesh;
    Marquardt_19011103step_3001: THREE.Mesh;
    Imported1_136001: THREE.Mesh;
    Imported1_137001: THREE.Mesh;
    Imported1_14001: THREE.Mesh;
    Imported1_7001: THREE.Mesh;
    Imported1_74001: THREE.Mesh;
    Imported1_81001: THREE.Mesh;
    Imported1_83001: THREE.Mesh;
    Imported1_90001: THREE.Mesh;
    ["Boss-Extrude6001"]: THREE.Mesh;
    Chamfer2_3001: THREE.Mesh;
    ["Cut-Extrude3001"]: THREE.Mesh;
    ["Cut-Extrude5001"]: THREE.Mesh;
    ["Cut-Extrude7001"]: THREE.Mesh;
    Fillet1001: THREE.Mesh;
    Fillet2_2001: THREE.Mesh;
    Fillet6_2001: THREE.Mesh;
    Imported1_85001: THREE.Mesh;
    Imported1_89001: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube000: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Plotter_001: THREE.Mesh;
    leg: THREE.Mesh;
    leg003: THREE.Mesh;
    leg001: THREE.Mesh;
    leg002: THREE.Mesh;
    leg_body: THREE.Mesh;
    caster: THREE.Mesh;
    caster001: THREE.Mesh;
    vaster: THREE.Mesh;
    vaster001: THREE.Mesh;
    body: THREE.Mesh;
    button: THREE.Mesh;
    cap: THREE.Mesh;
    front: THREE.Mesh;
    body001: THREE.Mesh;
    table: THREE.Mesh;
    Plane: THREE.Mesh;
    pole001: THREE.Mesh;
    pole003: THREE.Mesh;
    pole005: THREE.Mesh;
    pole007: THREE.Mesh;
    pole008: THREE.Mesh;
    pole009: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cube022: THREE.Mesh;
    Mesh_0: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    ["Boss-Extrude21"]: THREE.Mesh;
    Fillet12: THREE.Mesh;
    Thread1: THREE.Mesh;
  };
  materials: {
    ["Black Plastic"]: THREE.MeshStandardMaterial;
    ["Satin Steel"]: THREE.MeshStandardMaterial;
    ["Black Paint"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Bed Dots"]: THREE.MeshStandardMaterial;
    ["Black Plastic.001"]: THREE.MeshStandardMaterial;
    ["Satin Steel.001"]: THREE.MeshStandardMaterial;
    ["Black Paint.001"]: THREE.MeshStandardMaterial;
    ["Glass.001"]: THREE.MeshStandardMaterial;
    ["Bed Dots.001"]: THREE.MeshStandardMaterial;
    leg: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    sidegray: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    Plotter_001: THREE.MeshStandardMaterial;
    cap: THREE.MeshStandardMaterial;
    front: THREE.MeshStandardMaterial;
    wood: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    glass: THREE.MeshPhysicalMaterial;
    Material_2: THREE.MeshStandardMaterial;
    ["Material_1.003"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "/models/hero002.glb"
  ) as unknown as GLTFResult;
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    group.current?.rotation.set(
      0.1 + Math.cos(t / 4.5) / 10,
      Math.sin(t / 4) / 4,
      0.3 - (1 + Math.sin(t / 4)) / 8
    );
    group.current!.position.y = (1 + Math.sin(t * 2)) / 10;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-3.25, 1.28, 1.97]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      >
        <mesh geometry={nodes.Fillet3.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet3_2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet3_3.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet3_4.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_4"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_5"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_6"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_7"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_103.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_105.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_107.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_93.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Object_1.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Object_2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_6"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_5.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude1"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} />
      </group>
      <group
        position={[-3.25, 1.28, 1.97]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      >
        <mesh geometry={nodes["????????_??????2"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["??????????7"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude17"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_4"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_5"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_7"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Chamfer1_8.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Chamfer2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude27"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude3_2"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude4"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude7_2"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_3.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_4.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_6.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet4.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet4_2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_122.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_123.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_28.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_31.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_70.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Marquardt_19011103step3.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Marquardt_19011103step_2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Marquardt_19011103step_3.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_136.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_137.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_14.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_7.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_74.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_81.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_83.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_90.geometry} />
      </group>
      <group
        position={[-3.25, 1.28, 1.97]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      >
        <mesh geometry={nodes["Boss-Extrude6"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Chamfer2_3.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude3"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude5"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude7"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet2_2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet6_2.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_85.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_89.geometry} />
      </group>
      <group
        position={[-4.35, 1.28, 1.97]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      >
        <mesh geometry={nodes.Fillet3001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet3_2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet3_3001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet3_4001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_4001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_5001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_6001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude2_7001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_103001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_105001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_107001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_93001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Object_1001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Object_2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_6001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_5001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude1001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Object_3001.geometry} />
      </group>
      <group
        position={[-4.35, 1.28, 1.97]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      >
        <mesh geometry={nodes["????????_??????2001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["??????????7001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude17001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_4001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_5001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Boss-Extrude1_7001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Chamfer1_8001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Chamfer2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude27001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude3_2001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude4001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude7_2001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_3001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_4001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1_6001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet4001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet4_2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_122001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_123001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_28001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_31001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_70001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Marquardt_19011103step3001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Marquardt_19011103step_2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Marquardt_19011103step_3001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_136001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_137001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_14001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_7001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_74001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_81001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_83001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_90001.geometry} />
      </group>
      <group
        position={[-4.35, 1.28, 1.97]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      >
        <mesh geometry={nodes["Boss-Extrude6001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Chamfer2_3001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude3001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude5001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes["Cut-Extrude7001"].geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet1001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet2_2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Fillet6_2001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_85001.geometry}>
          <meshStandardMaterial transparent />
          <Edges />
        </mesh>
        <mesh geometry={nodes.Imported1_89001.geometry} />
      </group>
      <mesh
        geometry={nodes.Cube015.geometry}
        position={[-2.79, 1.07, -2.16]}
        scale={[1.14, 0.48, 0.72]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube000.geometry}
        position={[-2.78, 1.07, -2.16]}
        scale={[1.13, 0.47, 0.71]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube016.geometry}
        position={[-2.79, 0.34, -2.16]}
        scale={[1.14, 0.6, 0.72]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube017.geometry}
        position={[-2.79, 1.07, -2.16]}
        scale={[1.14, 0.48, 0.72]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube001.geometry}
        position={[-2.79, 1.07, -2.16]}
        scale={[1.14, 0.48, 0.72]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube002.geometry}
        position={[-2.79, 1.07, -2.16]}
        scale={[1.14, 0.48, 0.72]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cylinder.geometry}
        position={[-2.24, 1.15, -1.83]}
        rotation={[0.59, 0, 0]}
        scale={[0.07, 0, 0.07]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube003.geometry}
        position={[-2.79, 0.74, -2.16]}
        scale={[1.14, 0.07, 0.72]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube004.geometry}
        position={[-2.77, 0.88, -2.01]}
        scale={[0.53, 0.01, 0.4]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube005.geometry}
        position={[-2.77, 0.83, -2.01]}
        scale={[0.41, 0.09, 0.31]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube006.geometry}
        position={[-2.94, 1, -2.35]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.88, 0.01, 0.37]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube007.geometry}
        position={[-3.13, 0.83, -2.32]}
        scale={[-0.03, 0.09, 0.14]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube008.geometry}
        position={[-3.18, 0.83, -2.32]}
        scale={[-0.03, 0.09, 0.14]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube009.geometry}
        position={[-3.25, 0.83, -2.32]}
        scale={[-0.03, 0.09, 0.14]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube010.geometry}
        position={[-3.31, 0.83, -2.32]}
        scale={[-0.03, 0.09, 0.14]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube011.geometry}
        position={[-3.36, 0.83, -2.32]}
        scale={[-0.03, 0.09, 0.14]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube012.geometry}
        position={[-3.43, 0.83, -2.32]}
        scale={[-0.03, 0.09, 0.14]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube013.geometry}
        position={[-3.84, 1.07, -2.16]}
        scale={[1.13, 0.47, 0.71]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube014.geometry}
        position={[-2.79, 1.07, -2.16]}
        scale={[1.14, 0.48, 0.72]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Plotter_001.geometry}
        position={[3.82, 0, -2.14]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.leg.geometry}
        position={[-1.96, 0.08, -2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.02, 0.75, 0.07]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.leg003.geometry}
        position={[-0.79, 0.08, -2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.02, 0.75, 0.07]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.leg001.geometry}
        position={[-1.96, 0.21, -2.16]}
        scale={[-0.02, 0.23, 0.11]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.leg002.geometry}
        position={[-0.79, 0.21, -2.16]}
        scale={[-0.02, 0.23, 0.11]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.leg_body.geometry}
        position={[-1.38, 0.21, -2.16]}
        scale={[1.06, 0.23, 0.11]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.caster.geometry}
        position={[-1.96, 0.02, -1.79]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.04, -0.02, -0.04]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.caster001.geometry}
        position={[-0.79, 0.02, -1.79]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.04, -0.02, -0.04]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.vaster.geometry}
        position={[-1.96, 0.02, -2.53]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.04, -0.02, -0.04]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.vaster001.geometry}
        position={[-0.79, 0.02, -2.53]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[-0.04, -0.02, -0.04]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.body.geometry}
        position={[-1.38, 0.72, -2.16]}
        scale={[1, 0.59, 0.66]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.button.geometry}
        position={[-0.81, 1.11, -1.86]}
        rotation={[Math.PI / 2, 1.41, -Math.PI / 2]}
        scale={[0.13, 0.01, 0.09]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.cap.geometry}
        position={[-1.38, 1.11, -2.16]}
        scale={[0.87, 0.02, 0.76]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.front.geometry}
        position={[-1.38, 0.72, -2.16]}
        scale={[1, 0.59, 0.66]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.body001.geometry}
        position={[-1.38, 0.72, -2.16]}
        scale={[1, 0.59, 0.66]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.table.geometry}
        position={[-1.38, 0.72, -2.19]}
        scale={[0.83, 0.03, 0.59]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Plane.geometry}
        position={[0, -0.05, 0]}
        scale={[6.24, 3.82, 3.23]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.pole001.geometry}
        position={[6.08, 1.22, -3.12]}
        scale={[0.1, 1.5, 0.1]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.pole003.geometry}
        position={[3, 1.22, -3.12]}
        scale={[0.1, 1.5, 0.1]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.pole005.geometry}
        position={[0.04, 1.22, -3.12]}
        scale={[0.1, 1.5, 0.1]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.pole007.geometry}
        position={[-3.09, 1.22, -3.12]}
        scale={[0.1, 1.5, 0.1]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.pole008.geometry}
        position={[-6.13, 1.22, 3.07]}
        scale={[0.1, 1.5, 0.1]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.pole009.geometry}
        position={[-6.13, 1.22, -3.12]}
        scale={[0.1, 1.5, 0.1]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube.geometry}
        position={[0, 1.2, -3.15]}
        scale={[7.18, 1.47, 0.01]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube019.geometry}
        position={[-6.14, 1.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.66, 1.47, 0.01]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh geometry={nodes.Cube021.geometry} position={[1.08, 0.36, -2.01]}>
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cylinder001.geometry}
        position={[1.93, 0.29, -1.16]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh geometry={nodes.Cube023.geometry} position={[-3.34, 1.25, 1.86]}>
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cube024.geometry}
        position={[1.61, 0.29, 1.17]}
        scale={[1.61, 1.01, 1.61]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Cylinder002.geometry}
        position={[3, 0.25, 2.54]}
        scale={[1.61, 1.01, 1.61]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh geometry={nodes.Cube022.geometry} position={[-4.89, 1.35, -0.5]}>
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Mesh_0.geometry}
        position={[1.05, 0.73, -2.43]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes.Mesh_1.geometry}
        position={[1.05, 0.73, -2.43]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.07}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh
        geometry={nodes["Boss-Extrude21"].geometry}
        position={[0, 0, -0.54]}
      >
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh geometry={nodes.Fillet12.geometry} position={[0, 0, -0.54]}>
        <meshStandardMaterial transparent />
        <Edges />
      </mesh>
      <mesh geometry={nodes.Thread1.geometry} position={[0, 0, -0.54]} />
    </group>
  );
}

useGLTF.preload("/models/hero002.glb");
