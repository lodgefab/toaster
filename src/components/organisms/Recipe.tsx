import {FunctionComponent, ReactNode, useMemo, useState} from "react";
import styled from '@emotion/styled'
import { motion } from "framer-motion";
import { color, font, zIndex } from "../../styles";
import StepView from "../molecules/StepView";
import Image from 'next/image'
import ReactMarkdown from "react-markdown";


type Props = {
    markdown?: ReactNode
    title:string
    version:string
}


const Recipe: FunctionComponent = ({ markdown, title, version }: Props) => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <>
            
            <Wrapper>
                <Title>{title}<br/><Version>{"v"+version}</Version></Title>
                <ThreeDView>
                    <CanvasWrapper
                        data-ison={isOn} 
                    >
                        <StepView height={0}></StepView>
                    </CanvasWrapper>
                    <Switch
                        onClick={toggleSwitch}
                    ><Image src={isOn?'/icons/shrink.svg':'/icons/expand.svg'} width={24} height={24} alt={'expand or shrink'}/></Switch>
                </ThreeDView>
                <MarkdownStyle>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </MarkdownStyle>
            </Wrapper>
        </>
    );
};

export default Recipe;

const Wrapper = styled(motion.article)`
    position: relative;
    margin:64px 0 0;
    max-width:640px;
    margin:0 auto;
    text-align: left;
    border: 1px solid ${color.content.dark};
    padding:64px;
    color:${color.content.dark};
    
    
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
    padding:32px 0;
    box-sizing: border-box;
    border-top:1px solid ${color.content.middle};
    border-bottom:1px solid ${color.content.middle};
`

const Version = styled.span`
    ${font.body1};
`

const ThreeDView = styled.div`
    position: relative;
    width:100%;
    height:480px;
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
