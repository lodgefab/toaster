import {FunctionComponent, useEffect, useState} from "react";
import styled from '@emotion/styled'
import { color, font, zIndex } from "../../styles";
import { GithubCorner } from "../Atoms/GithubCorner";
import  { Link as Scroll} from "react-scroll";
import { motion } from "framer-motion"
import { useRouter } from 'next/router';
import Link from "next/link";

type Props = {
    width: number
}

const Menu:React.VFC<Props> = ({width})  => {
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
            width={width} 
        >
            <Link href={"/"} passHref><Logo>🍞 Toaster</Logo></Link>
            <MenuUL>
                <MenuLinkItem destination={"recipe"} label={"Recipe"}/>
                <MenuLinkItem destination={"projects"} label={"Projects"}/>
                <MenuLinkItem destination={"studio"} label={"Studio"}/>
                <MenuLinkItem destination={"people"} label={"People"}/>
            </MenuUL>
            <Indicator>
                <IndicatorGage 
                    variants={indicator}
                    animate={!loading?'variantA':'variantB'}
                    transition={{ duration: 5, times: [0, 0.2, .4, .6, .8, 1] }}
                />
                <IndicatorMask/>
            </Indicator>
            {/* <HandleRail></HandleRail> */}
            <Handle variants={handle} initial="variantA" animate={!loading? "variantA":"variantB"}></Handle>
        </Container>
    );
};

export default Menu;

const MenuLinkItem: React.FC<{ destination: string, label:string }> = ({ destination, label }) => {
    // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する

    const { pathname } = useRouter()

  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する
    return (
        <>
        {pathname === '/' && (
            
            <MenuLI whileHover={{ x: 10 }}>
                <Scroll to={destination} smooth={true} duration={600}>{label}</Scroll>
            </MenuLI>
        )}
        {pathname !== '/' && (
            <Link href={`/?to=${destination}`} passHref={true}>
                <MenuLI whileHover={{ x: 10 }}>{label}</MenuLI>
            </Link>
        )}
        </>
    )
}

const Container = styled(motion.div)<{width:number}>`
    width:${(props)=>props.width}px;
    position:fixed;
    margin:64px 0 0;
    padding:0 0 0 16px;
    top:0;
    bottom: 0;
    transform: translateX(-100%);
    /* background-color: purple; */
`

const Logo = styled.h1`
    ${font.h3};
    color:${color.content.dark};
    cursor:pointer;
    margin:0 0 24px 0;
`

const MenuUL = styled.ul`
    
`

const MenuLI = styled(motion.li)`
    ${font.subtitle1};
    color:${color.content.dark};
    margin:16px 0;
    cursor:pointer;
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
