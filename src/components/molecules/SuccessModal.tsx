import { Dispatch, SetStateAction, useContext, useRef, VFC } from "react";
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
  // const titleRef1 = useRef<HTMLSpanElement | null>()
  // const titleRef2 = useRef<HTMLSpanElement | null>()

  return (
        <AnimatePresence>
                {isSuccessModalOpen && (
                    <>
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
                        <Heading>
                          <Image  src={"/images/success.svg"} layout={'fill'} objectFit='contain'/>
                        </Heading>
                        <Video src={'/video/token.mp4'} loop autoPlay muted></Video>
                        <Bottom>
                          <LODGE href={'https://lodge.yahoo.co.jp/'} target={'_blank'}/>
                          <img src={'/images/code.svg'}/>
                          <Description>
                            This Toaster NFT is a utility token given who contributes LODGE Fab community.
                          </Description>
                          <Etherscan href={`https://polygonscan.com/tx/${sceneState.txHash}`} target={'_blank'}/>
                        </Bottom>
                      </Container>
                    </Overlay>
                    </>
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
    z-index:${zIndex.elevation.ev10};

`


const Container = styled(motion.div)`
  position:relative;
  width: 80vw;
  max-width:820px;
  border-radius: 15px;
  background-color: #e5e5e3;
  padding:0 0 64px 0;
  overflow: hidden;
  z-index:${zIndex.elevation.ev15};
  ${media.mdsp`
    padding:0 0 32px 0;
  `}
 
`

const Video = styled(motion.video)`
  width:100%;
  max-width:980px;
`

const Heading = styled.div`
  position: absolute;
  top:32px;
  left:32px;
  width:480px;
  height:200px;
  ${media.mdsp`
    width:240px;
    height:100px;
  `} 
`

const Bottom = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  gap:16px;
  padding:0 32px;
  width:100%;

  img{
    width:140px;
    height:auto;
    ${media.mdsp`
      width:120px;
    `}
  }
`
const LODGE=styled.a`
  width:64px;
  height:64px;
  display: block;
  background:url('/images/logo_lodge.svg');
  ${media.mdsp`
    width:44px;
    height:44px;
  `}
`
const Description = styled.p`
  display: flex;
  align-items: center;
  height:100%;
  border: 1px ${color.content.dark} solid;
  padding:8px 16px;
  ${media.mdsp`
    grid-column: 1/4;
    grid-row: 2/3;
  `}
`

const Etherscan = styled.a`
  display: inline-block;
  width:64px;
  height:64px;
  border: 1px ${color.content.dark} solid;
  background-image: url('/images/logo_etherscan.svg');
  background-repeat: no-repeat;
  background-size: contain;
  ${media.mdsp`
    width:44px;
    height:44px;
  `}
`