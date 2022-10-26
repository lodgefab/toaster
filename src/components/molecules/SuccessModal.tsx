import { Dispatch, SetStateAction, useContext, useRef, VFC } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { color, font, media, zIndex, motionConfig } from "../../styles";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { AppContext } from "../../contexts/AppContextProvider";
import { useSnapshot } from "valtio";
import { sceneState } from "../../utils/sceneState";
import { Description } from "@ethersproject/properties";

type SuccessModalProps = {
};

const SuccessModal: VFC<SuccessModalProps> = ( props) => {
  
  const { isSuccessModalOpen } = useSnapshot(sceneState)
  const titleRef1 = useRef<HTMLSpanElement | null>()
  const titleRef2 = useRef<HTMLSpanElement | null>()

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
                        <Heading  
                        ><span ref={titleRef1}>Mint</span><br/><span ref={titleRef2}>Successfull</span></Heading>
                        <Video src={'/video/token.mp4'} loop autoPlay muted></Video>
                        <Bottom>
                          <LODGE href={'https://lodge.yahoo.co.jp/'} target={'_blank'}/>
                          <img src={'/images/code.svg'}/>
                          <Description>
                            This Toaster NFT is a utility token given who contributes LODGE Fab community.
                          </Description>
                          <Etherscan href={'https://goerli.etherscan.io/tx/${sceneState.txHash}'} target={'_blank'}/>
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
 
`

const Video = styled(motion.video)`
  width:100%;
  max-width:980px;
`

const Heading = styled(motion.h1)`
  position: absolute;
  top:32px;
  left:32px;
  ${font.h1}
  font-size:98px;
  line-height:0.8;
  padding: 0 0 32px;
  text-align: left;
  color:transparent;
  -webkit-text-stroke:1px ${color.content.dark};
  span{
    display: inline-block;
    &:nth-of-type(1){
      margin-top: -16px;
    }
  }
`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  gap:32px;
  padding:0 32px;
  width:100%;

  img{
    width:140px;
    height:auto;
  }
`
const LODGE=styled.a`
  min-width:64px;
  height:64px;
  display: block;
  background:url('/images/logo_lodge.svg');
`
const Description = styled.p`
  display: flex;
  align-items: center;
  /* width:100%; */
  border: 1px ${color.content.dark} solid;
  padding:8px 16px;
`

const Etherscan = styled.a`
  display: inline-block;
  min-width:64px;
  height:64px;
  border: 1px ${color.content.dark} solid;
  background-image: url('/images/logo_etherscan.svg');
  background-repeat: no-repeat;
  background-size: contain;
`