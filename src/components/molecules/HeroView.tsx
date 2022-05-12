import styled from "@emotion/styled";
import {
  FunctionComponent,
  lazy,
  Suspense,
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

type Props = {
  model: string;
  isReady:boolean
};

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
};

const HeroView: React.VFC<Props> = ({ model, isReady }) => {
  const Model = lazy(() => import(`../../../public/models/${model}.tsx`));

  return (
      <Canvas
        camera={{ position: [0, 40, 80], fov: 80 }}
        orthographic={true}
        dpr={[1, 2]}
      >
        {/* <Zoom/> */}
        <ambientLight />
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
              <Model isReady={isReady}/>
            </Bounds>
            
          </PresentationControls>
        </Suspense>
        {/* <OrthographicCamera zoom={1}/> */}
      </Canvas>
  );
};

export default HeroView;
