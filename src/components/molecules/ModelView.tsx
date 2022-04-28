import styled from "@emotion/styled";
import {FunctionComponent, lazy, Suspense, useEffect, useRef, useState} from "react";
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Edges, Html, OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { OrthographicCamera } from '@react-three/drei'
import dynamic from "next/dynamic";

type Props = {
    model: string
}


const Loader = () => {
    return(
        <Html>Loading...</Html>
    )
};



const StepView:React.VFC<Props> = ({model})  => {
    // const Model = dynamic(() => import( `../../../public/models/${model}.tsx`))
    const Model = lazy(() => import(`../../../public/models/${model}.tsx`)); 
    const deg2rad = (degrees: number) => degrees * (Math.PI / 180);
    return(
            <Canvas>
                <OrthographicCamera makeDefault zoom={1}　position={[80,80,80]} />
                <Suspense fallback={<Loader/>}>
                    <ambientLight />
                    {/* <pointLight position={[10, 10, 10]} /> */}
                    <Stage contactShadow={{ blur: 1024, opacity: .5 }}>
                        {/* <Box position={[-1.2, 0, 0]} />
                        <Box position={[1.2, 0, 0]} /> */}
                        <Model/>
                    </Stage>
                    <OrbitControls target={[0,0,0]} enablePan={false} />
                </Suspense>
            </Canvas>
    )
}

export default StepView;


