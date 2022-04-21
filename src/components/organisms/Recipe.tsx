import {FunctionComponent, ReactNode, useMemo, useState} from "react";
import styled from '@emotion/styled'
import { motion } from "framer-motion";
import { color, font, media, zIndex } from "../../styles";
import StepView from "../molecules/ModelView";
import Image from 'next/image'
import Link from "next/link";



type Props = {
    children: ReactNode
    title:string
    version:string
    model:string
}

const leftColumnWidth = 320

const turnIn = {
    initial:{
        scale:0,
        rotate:0
    },
    animate:{
        scale:1,
        rotate:180,
        transition:{
            duration:0.6,
            delay:1.8
        }
    }
    
}

const Recipe: React.FC<Props> = ({
        children, 
        title, 
        version, 
        model
    }) => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <Contents>
            
            <WrapperLeft width={leftColumnWidth}>
                {model&&(
                    <ThreeDView height={leftColumnWidth}>
                        <CanvasWrapper
                            data-ison={isOn} 
                        >
                            <StepView model={model}></StepView>
                        </CanvasWrapper>
                        <Switch
                            onClick={toggleSwitch}
                        ><Image src={isOn?'/icons/shrink.svg':'/icons/expand.svg'} width={24} height={24} alt={'expand or shrink'}/></Switch>
                    </ThreeDView>
                )}

            </WrapperLeft>
            <WrapperRight width={leftColumnWidth}>
                <Link href="/" passHref>
                    <CloseBtn
                        variants={turnIn}
                    />
                </Link>
                <Title>{title}<br/><Version>{"v"+version}</Version></Title>
                
                    <MarkdownStyle>
                        {children}
                    </MarkdownStyle>
                
            </WrapperRight>
        </Contents>
    );
};

export default Recipe;

const Contents = styled.div`
    position: relative;
    display: grid;
    gap:32px;
    grid-template-columns: 1fr auto;
    margin: 128px 0 128px;
    ${media.sp`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
    `}
`

const CloseBtn = styled(motion.div)`
    position: absolute;
    top: calc((44px + 16px) * -1);
    left:50%;
    width:44px;
    height:44px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${color.content.dark};
    transform: translate(-50%,0);
    &:before{
        content:'';
        display: block;
        width:70%;
        height:1px;
        background-color: ${color.background.white};
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after{
        content:'';
        display: block;
        width:70%;
        height:1px;
        background-color: ${color.background.white};
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`

const WrapperLeft = styled.div`
        position:fixed;
        width:${(props: { width: number; }) => props.width}px;  
        display: flex;
        flex-direction: column;
        ${media.sp`
            position:relative;
            width:100%;
        `}
`
const WrapperRight = styled(motion.article)<{width:number}>`
    position: relative;
    margin:0px 0 0 ${props=>(props.width+ 32 + "px")};
    max-width:640px;
    /* margin:0 auto 0 ; */
    text-align: left;
    border: 1px solid ${color.content.dark};
    padding:64px;
    color:${color.content.dark};
    ${media.sp`
        margin:0;
    `}
    
`

const MarkdownStyle = styled.div`
    p, h1, h2, h3{
        z-index: ${zIndex.elevation.ev5};
    }
    img{
        width:100%;
        height:auto;
    }
    h1{
        ${font.h2};
        margin:2em 0 0;
        padding:3px 0;
    }
    h2{
        ${font.h3};
        margin:1.4em 0 0;
        padding:3px 0;
    }
    h3{
        ${font.subtitle1};
        margin:1em 0 0;
        padding:3px 0;
    }
    p{
        ${font.article1};
        padding:3px 0;
    }
    a{
        text-decoration: underline;
    }
`

const Title = styled.h1`
    ${font.h2};
    text-align: center;
    margin:0 0 64px 0;
    padding:32px 0;
    box-sizing: border-box;
    border-top:1px solid ${color.content.middle};
    border-bottom:1px solid ${color.content.middle};
`

const Version = styled.span`
    ${font.body1};
`

const ThreeDView = styled.div<{height:number}>`
    position: relative;
    width:100%;
    height:${props=>(props.height + 'px')};
`
const Switch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:32px;
    height:32px;
    border-radius: 50%;
    background-color: ${color.content.middle};
    position: absolute;
    right:16px;
    bottom:16px;
    cursor: pointer;
`


const CanvasWrapper = styled(motion.div)`
    
    z-index: ${zIndex.base};
    &[data-ison="false"]{
        /* display: none; */
        position: relative;
        width:100%;
        height:100%;
    }
    &[data-ison="true"]{
        /* display: visible; */
        position: fixed;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
    }
    
`
