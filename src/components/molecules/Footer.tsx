import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'


const Footer: FunctionComponent = () => {

    return (
        <Container>
        <Link href={`/`} passHref>
            <Logo src={`/images/footer.svg`}/>
        </Link>
        </Container>
    );
};

export default Footer;

const Logo = styled.img`
    width:320px;
    height:auto;
    cursor:pointer;
`
const Container = styled.div`
    position:absolute;
    bottom:0;
    width:100%;
    display:flex;
    justify-content: center;
`