/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Edges, Html, useGLTF, useTexture,Image, Text, Sphere, Circle } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import { motion as motion3d } from "framer-motion-3d";
import { motion } from "framer-motion";
import { useCursor } from "../../src/utils/useCursor";
import { color, spring } from "../../src/styles";
import { useAnimation, useCycle } from "framer-motion";
import styled from "@emotion/styled";
import { makeConsoleLogger } from "@notionhq/client/build/src/logging";
import { useAddress, useClaimNFT, useEditionDrop, useNetworkMismatch } from "@thirdweb-dev/react";
import { useConnectWallet } from "../../src/hooks/useConnectWallet";
import { proxy, useSnapshot } from 'valtio'
import { sceneState } from "../../src/utils/sceneState";
import { AppContext } from "../../src/contexts/AppContextProvider";

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

export default function Model(
  props: JSX.IntrinsicElements["group"],
  isReady: boolean,
) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(
    "/models/hero003.glb"
  ) as unknown as GLTFResult;
  const [isUp, setUp] = useState(false);
  const { isConnected, address, isSuccessModalOpen } = useSnapshot(sceneState)
  
  // Connect to the Edition Drop contract
  const editionDropContract = useEditionDrop(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  );
  // Claim an NFT (and update the nfts above)
  const { mutate: claimNft, isLoading: claiming } =
    useClaimNFT(editionDropContract);
  
    //networkDetection
    const networkMismatch = useNetworkMismatch();

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
  //Push to mintの表示
  const pushTexture = useTexture('/images/push_to_mint.png');


  
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

  useEffect(()=>{
    console.log(address)
  },[address])
  // 浮遊アニメーション
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current!.position.y = (-4 + Math.sin(t * 2)) / 10;
  });


  return (
    <group ref={group} {...props} dispose={null}>
      <motion3d.group
        animate={{ rotateY: 6.3 }}
        transition={{ ...spring, mass: 10, damping: 500 }}
      >
        {/* Body */}
        <group position={[0, 0.21, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry}>
            <meshStandardMaterial transparent />
            <Edges />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry}>
            <meshStandardMaterial transparent />
            <Edges />
          </mesh>
        </group>

        {/* Handle */}
        <motion3d.group whileHover={{ y: -0.08 }}>
          <motion3d.mesh
            castShadow
            receiveShadow
            geometry={nodes.handle.geometry}
            position={[0.55, -0.09, 0]}
            onClick={() => {setUp(!isUp)}}
            variants={handleVariants}
            animate={isUp ? "variantUp" : "variantDown"}
            {...useCursor()}
            transition={{ ...spring, damping: 100 }}
          >{
            isConnected?(
              <>
              <meshStandardMaterial transparent color={'orange'}/>  
              <Html 
                  style={{
                    transition: "all 0.2s",
                    opacity: 1,
                    // transform: `scale(1)`,
                    width: 120,
                    height: 120,
                    padding: 0,
                  }}
                  position={[0.8, 0.9, 0]}
                  center
                  >
                  <MintText>
                    {networkMismatch?(
                      `Wrong Network`
                    ):(
                      claiming?`Minting`:`Press To\nMint Toast🍞`
                      
                    )}
                  </MintText>
                  <MintCursor 
                    whileHover={{scale:1.1}}
                    onClick={()=>{
                      isConnected&&address&&claimNft({
                          quantity: 1,
                          tokenId: 0,
                          to: address,
                        },{
                          onSuccess: (data) => {
                            sceneState.isSuccessModalOpen = true
                            sceneState.txHash = data.receipt.transactionHash
                          },
                          onError: (error) => {
                            const e = error as Error;
                            alert((e?.message as string) || "Something went wrong");
                          },
                        })
                      }}
                  />
              </Html>
              </>
            ):(
              <meshStandardMaterial transparent />  
            )
          }
            
            <Edges />
            
          </motion3d.mesh>
          
        </motion3d.group>

        {/* Toast */}
        <motion3d.group
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
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
            <meshStandardMaterial transparent />
            <Edges />
          </mesh>

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
          >
            <meshStandardMaterial transparent />
            <Edges />
          </mesh>
        </motion3d.group>
      </motion3d.group>
    </group>
  );
}

useGLTF.preload("/models/hero003.glb");

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
const MintCursor = styled(motion.div)`
  border-radius:999px;
  border:1px solid ${color.content.dark};
  position:absolute;
  width:100%;
  height:100%;
  cursor:pointer;
  
`

const MintText = styled.p`
text-align:center;
  position:absolute;
  top:-42px;
  left:50%;
  transform:translate(-50%,0);
  width:100%;
`