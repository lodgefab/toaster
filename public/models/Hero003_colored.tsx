/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useCycle } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useCursor } from "../../src/utils/useCursor";
import { color, spring } from "../../src/styles";
import styled from "@emotion/styled";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube_1: THREE.Mesh;
    handle001: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube015_1: THREE.Mesh;
  };
  materials: {
    toaster_silver: THREE.MeshStandardMaterial;
    ["toaster_black.001"]: THREE.MeshStandardMaterial;
    ["bread_plain.001"]: THREE.MeshStandardMaterial;
    ["bread_ear.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"], isReady: boolean) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF("/models/hero003_colored.glb") as unknown as GLTFResult;
    const [isUp, setUp] = useState(false);

  const toastVariants = {
    variantUp: {
      y: [-0.2, 1.0, 0.6],
    },
    variantDown: {
      y: -0.2,
      // rotateY:3.2,
    },
  };
  const handleVariants = {
    variantUp: { y: 0.2 },
    variantDown: { y: -0.2 },
  };

  //Toastに表示するimageのpath
  const [path, cyclePath] = useCycle(
    "/images/recipe001.png",
    "/images/recipe002.png"
  );

  // Toast Popup アニメーション
  useEffect(() => {
    const timer = setTimeout(() => {
      !isUp && cyclePath();
      setTimeout(() => {
        isReady && setUp(!isUp);
      }, 1 * 1000);
    }, 3 * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isUp]);

  // 浮遊アニメーション
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current!.position.y = (-4 + Math.sin(t * 2)) / 10;
  });
    return (
      <group ref={group} {...props} dispose={null}>
      <motion.group
        animate={{ rotateY: 6.3 }}
        transition={{ ...spring, mass: 10, damping: 500 }}
      >
        {/* Body */}
        <group position={[0, 0.21, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.toaster_silver}>
            
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={nodes.Cube_1.material}>
            
          </mesh>
        </group>

        {/* Handle */}
        <motion.group whileHover={{ y: -0.08 }}>
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.handle001.geometry}
            material={nodes.handle001.material}
            position={[0.55, -0.09, 0]}
            onClick={() => {
              setUp(!isUp);
            }}
            variants={handleVariants}
            animate={isUp ? "variantUp" : "variantDown"}
            {...useCursor()}
            transition={{ ...spring, damping: 100 }}
          >
          </motion.mesh>
        </motion.group>

        {/* Toast */}
        <motion.group
          position={[0, -0.09, 0.17]}
          variants={toastVariants}
          animate={isUp ? "variantUp" : "variantDown"}
          transition={{
            ...spring,
            damping: 100,
            duration: 0.5,
            time: [0.5, 1],
          }}
        >
          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["bread_plain.001"]}
          >
            <Html
              style={{
                transition: "all 0.2s",
                opacity: 1,
                transform: `scale(1)`,
                width: 110,
                height: 116,
                padding: 0,
              }}
              distanceFactor={4}
              position={[0, 1.3, 0.1]}
              transform
              occlude
            >
              <ToasterWrap>
                <ToasterRecipe src={path} alt={"image"} />
              </ToasterWrap>
            </Html>
            
          </motion.mesh>

          <motion.mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials["bread_ear.001"]}
          >
            
          </motion.mesh>
        </motion.group>
      </motion.group>
    </group>
  );
}

useGLTF.preload("/models/hero003_colored.glb");


const ToasterWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
const ToasterRecipe = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const ToasterText = styled.ul`
  width: 20%;
  li {
    width: 100%;
    height: 2px;
    background-color: #999;
    margin: 0 0 4px;
  }
`;

const ToasterImage = styled.div`
  border: 0.5px solid ${color.content.dark};
  width: 100%;
  height: 24px;
`;