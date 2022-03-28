import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { color, font } from "../../styles";


const Header: FunctionComponent = () => {

    return (
        <Container>
        <Link href={`/`} passHref>
            <Title>Toaster</Title>
        </Link>
        </Container>
    );
};

export default Header;

const Title = styled.h1`
    color:${color.content.dark};
    ${font.h1};
`
const Container = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
`