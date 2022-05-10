import styled from "@emotion/styled";
import {FunctionComponent, lazy, Suspense, useEffect, useRef, useState} from "react";
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Bounds, Edges, Html, OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { OrthographicCamera } from '@react-three/drei'
import dynamic from "next/dynamic";
import THREE from "three";

type Props = {
    model: string
}


const Loader = () => {
    return(
        <Html>Loading...</Html>
    )
};




const HeroView:React.VFC<Props> = ({model})  => {
    // const Model = dynamic(() => import( `../../../public/models/${model}.tsx`))
    const Model = lazy(() => import(`../../../public/models/${model}.tsx`)); 
    return(
            <Canvas camera={{ position: [80, 80, 80], fov: 50 }} orthographic={true} dpr={[1, 2]}>
                <ambientLight />
                <hemisphereLight color="#eeeeee" groundColor="#eeeeee" position={[-7, 25, 13]} intensity={1} />
                <Suspense fallback={<Loader/>}>
                    <Bounds fit clip margin={1.2}>
                        <Model/>
                    </Bounds>
                </Suspense>
                {/* <OrthographicCamera zoom={1}/> */}
            </Canvas>
    )
}

export default HeroView;


