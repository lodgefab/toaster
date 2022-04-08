import {FunctionComponent, ReactNode} from "react";
import styled from '@emotion/styled'
import { motion } from "framer-motion";

type Props = {
    children?: ReactNode
}


const Recipe: FunctionComponent = ({ children }: Props) => {
    return (
        <Wrapper
            
        >
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
`