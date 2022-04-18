import styled from "@emotion/styled";
import {FunctionComponent, Suspense, useEffect, useRef, useState} from "react";
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type Props = {
    height: number
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

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/toaster.glb");
    return (
        
            <primitive object={gltf.scene} scale={1} />
        );
    };


const StepView:React.VFC<Props> = ({height})  => {
    
    return(
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Model/>
                </Suspense>
            </Canvas>
    )
}

export default StepView;


