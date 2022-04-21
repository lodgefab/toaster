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

function Box(props: JSX.IntrinsicElements['mesh']) {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
        <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}



const Loader = () => {
    return(
        <Html>Loading...</Html>
    )
};



const StepView:React.VFC<Props> = ({model})  => {
    // const Model = dynamic(() => import( `../../../public/models/${model}.tsx`))
    const Model = lazy(() => import(`../../../public/models/${model}.tsx`)); 
    return(
            <Canvas>
                <OrthographicCamera makeDefault zoom={40}/>
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


