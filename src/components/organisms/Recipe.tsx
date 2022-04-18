import {FunctionComponent, ReactNode} from "react";
import styled from '@emotion/styled'
import { motion } from "framer-motion";
import { color, font } from "../../styles";
import StepView from "../molecules/StepView";

type Props = {
    children?: ReactNode
}


const Recipe: FunctionComponent = ({ children }: Props) => {
    return (
        <Wrapper
            
        >
            <StepView height={0}></StepView>
            {children}  
        </Wrapper>
    );
};

export default Recipe;

const Wrapper = styled(motion.article)`
    margin:64px 0 0;
    max-width:640px;
    margin:0 auto;
    text-align: left;
    border: 1px solid ${color.content.dark};
    padding:64px;
    color:${color.content.dark};
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
    img{
        
    }
`