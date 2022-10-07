import { Dispatch, SetStateAction, useContext, VFC } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { color, font, media, zIndex, motionConfig } from "../../styles";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { AppContext } from "../../contexts/AppContextProvider";
import { useSnapshot } from "valtio";
import { sceneState } from "../../utils/sceneState";

type SuccessModalProps = {
};

const SuccessModal: VFC<SuccessModalProps> = ( props) => {
  
  const { isSuccessModalOpen } = useSnapshot(sceneState)

  return (
        <AnimatePresence>
                {isSuccessModalOpen && (
                    <Overlay
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    onClick={()=> sceneState.isSuccessModalOpen = false}
                    >
                    <Container
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                      <Heading
                        
                      >Successfully Minted Toaster Token !</Heading>
                      <Video src={'/video/token.mp4'} loop autoPlay muted></Video>
                      <a href={`https://goerli.etherscan.io/tx/${sceneState.txHash}`} target={'_blank'} rel={"noopener noreferrer"}>see on Etherscan</a>
                    </Container>
                    </Overlay>
                )}
        </AnimatePresence>
  );
};

export default SuccessModal;

const Overlay = styled(motion.div)`
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color:${color.content.superLight} ;
    z-index:${zIndex.elevation.ev15};

`

const Container = styled(motion.div)`
  width: 80vw;
 border-radius: 15px;
 background-color: ${color.background.white};
 padding:32px;
`

const Video = styled(motion.video)`
  width:100%;
`

const Heading = styled(motion.h1)`
  ${font.h2}
  padding: 0 0 32px;
  text-align: center;
  color:${color.content.dark} ;
`