import styled from "@emotion/styled";
import {
  FunctionComponent,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Bounds,
  Edges,
  Html,
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { MotionConfig } from "framer-motion";
import { ThirdwebProvider, useAddress } from "@thirdweb-dev/react";
import { useConnectWallet } from "../../hooks/useConnectWallet";
import { proxy, useSnapshot } from "valtio";
import { sceneState } from "../../utils/sceneState";

type Props = {
  model: string;
  isReady: boolean;
};

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};
const activeChainId: number = parseInt(`${process.env.NEXT_PUBLIC_CHAIN_ID}`);

const HeroView: React.VFC<Props> = ({ model, isReady }) => {
  const Model = lazy(() => import(`../../../public/models/${model}.tsx`));
  const address = useConnectWallet().address;
  const snap = useSnapshot(sceneState);

  useEffect(() => {
    sceneState.isConnected = address ? true : false;
    sceneState.address = `${address}`;
    console.log(sceneState)
  }, [address]);

  return (
    <Canvas
      camera={{ position: [0, 40, 80], fov: 80 }}
      orthographic={true}
      dpr={[1, 2]}
    >
      {/* <Zoom/> */}
      <ThirdwebProvider desiredChainId={activeChainId}>
        <ambientLight />
        {/* @ts-ignore */}
        <hemisphereLight
          color="#eeeeee"
          groundColor="#eeeeee"
          position={[-7, 25, 13]}
          intensity={1}
        />
        <Suspense fallback={<Loader />}>
          <PresentationControls
            global
            rotation={[0, -Math.PI / 4, 0]}
            polar={[0, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            cursor={false}
            snap={true}
          >
            <Bounds fit clip margin={1.2}>
              <Model isReady={isReady} isConnected={address ? true : false} />
            </Bounds>
            {/* @ts-ignore */}
            <gridHelper
              args={[10, 40, "#d1d1d1", "#e2e2e2"]}
              position={[-0.25, -1.2, 0]}
              rotation={[0, 0, 0]}
            />
          </PresentationControls>
        </Suspense>
        {/* <OrthographicCamera zoom={1}/> */}
      </ThirdwebProvider>
    </Canvas>
  );
};

export default HeroView;
