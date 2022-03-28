import {FunctionComponent, ReactNode} from "react";
import Link from "next/link";
import {BlogPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import ReactMarkdown from "react-markdown";

type Props = {
    children?: ReactNode
}

const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const Recipe: FunctionComponent = ({ children }: Props) => {

    return (
        <Wrapper>
              {children}  
        </Wrapper>
    );
};

export default Recipe;

const Wrapper = styled.article`
    max-width:640px;
    margin:0 auto;
`