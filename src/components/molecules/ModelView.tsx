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
  Stage,
  useGLTF,
} from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";
import dynamic from "next/dynamic";

type Props = {
  model: string;
};

const Loader = () => {
  return <Html>Loading...</Html>;
};

const StepView: React.VFC<Props> = ({ model }) => {
  // const Model = dynamic(() => import( `../../../public/models/${model}.tsx`))
  const Model = lazy(() => import(`../../../public/models/${model}.tsx`));
  return (
    <Canvas
      camera={{ position: [80, 80, 80], fov: 50 }}
      orthographic={true}
      dpr={[1, 2]}
    >
      <ambientLight />
      {/* @ts-ignore */}
      <hemisphereLight
        color="white"
        groundColor="#eeeeee"
        position={[-7, 25, 13]}
        intensity={1}
      />
      <Suspense fallback={<Loader />}>
        <Bounds fit clip margin={1.2}>
          {/* <pointLight position={[10, 10, 10]} /> */}
          {/* <Stage contactShadow={{ blur: 1024, opacity: .5 }}> */}
          {/* <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} /> */}
          <Model />
          {/* </Stage> */}
        </Bounds>
      </Suspense>
      <OrbitControls enablePan={false} makeDefault />
      {/* <OrthographicCamera zoom={1}/> */}
    </Canvas>
  );
};

export default StepView;
