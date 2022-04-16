import {FunctionComponent, useEffect, useState} from "react";
import styled from '@emotion/styled'
import { color, font, zIndex } from "../../styles";
import { GithubCorner } from "../Atoms/GithubCorner";
import  { Link as Scroll} from "react-scroll";
import { motion } from "framer-motion"
import { useRouter } from 'next/router';
import Link from "next/link";

type Props = {
    height: number
}

const Header:React.VFC<Props> = ({height})  => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handle = {
        variantA: { y:56},
        variantB: { y:560 }
    }
    const indicator = {
        variantA:{width:'0%', transition: { duration: 0.1 }},
        variantB:{width: ['0%', '20%', '40%', '60%', '80%', '100%']}
    }
    
    

    const handleStart = (url: string) => {
        if (url !== router.pathname) {
            setLoading(true);
        }
    }
    const handleComplete = (url: string) => {
        if (url !== router.pathname) {
            setLoading(false);
        }
    }


    useEffect(() => {
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
        }
    })

    return (
        <Container 
            height={height} 
        >
            <Link href={"/"} passHref><Logo>🍞 Toaster</Logo></Link>
            <HeaderUL>
                <HeaderLinkItem destination={"recipe"} label={"Recipe"}/>
                <HeaderLinkItem destination={"projects"} label={"Projects"}/>
                <HeaderLinkItem destination={"studio"} label={"Studio"}/>
                <HeaderLinkItem destination={"people"} label={"People"}/>
            </HeaderUL>
        </Container>
    );
};

export default Header;

const HeaderLinkItem: React.FC<{ destination: string, label:string }> = ({ destination, label }) => {
    // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する

    const { pathname } = useRouter()
    const menu = {
        visible: { y: 0 },
        hidden: { y: 12 },
    }
  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する
    return (
        <>
        {pathname === '/' && (
            <LiWrap>
                <HeaderLI variants={menu} initial='hidden' whileHover='visible'>
                    <Scroll to={destination} smooth={true} duration={600}>{label}</Scroll>
                </HeaderLI>
            </LiWrap>
        )}
        {pathname !== '/' && (
            <LiWrap>    
                <Link href={`/?to=${destination}`} passHref={true}>
                    <HeaderLI variants={menu} initial='hidden' whileHover='visible'>{label}</HeaderLI>
                </Link>
            </LiWrap>
        )}
        </>
    )
}

const Container = styled(motion.div)<{height:number}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;    
    max-width:1040px;
    height:${(props)=>props.height}px;
    position:fixed;
    top:0;
    left:50%;
    transform: translateX(-50%);
    z-index: ${zIndex.elevation.ev15};
`

const Logo = styled.h1`
    ${font.h2};
    color:${color.content.dark};
    cursor:pointer;
`

const HeaderUL = styled.ul`
    display: flex;
    flex-direction: row;
`

const HeaderLI = styled(motion.li)`
    ${font.subtitle1};
    color:${color.content.dark};
    padding:8px 0;
    cursor:pointer;
`

const LiWrap = styled.div`
    height:32px;
    overflow: hidden;
    border-bottom: solid 1px ${color.content.dark};
    margin:0px 16px;
`

const Handle = styled(motion.div)`
    position: absolute;
    top:0;
    left:-120px;
    background-color: greenyellow;
    width:120px;
    height:32px;
    border-radius: 8px;
`

const Indicator = styled.div`
    position: relative;
    height:16px;
    width:calc(16px * 8);
`

const IndicatorMask = styled.div`
    position: relative;
    width:100%;
    height:100%;
    background: url('/images/dot.svg') repeat-x;
    /* z-index: ${zIndex.elevation.ev5}; */
`
const IndicatorGage = styled(motion.div)`
    position:absolute;
    width:100%;
    height:100%;
    background-color: ${color.content.dark};
    position: absolute;
    z-index: ${zIndex.base};
`
