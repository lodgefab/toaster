import {FunctionComponent, useEffect, useState} from "react";
import styled from '@emotion/styled'
import { color, font, zIndex } from "../../styles";
import { GithubCorner } from "../Atoms/GithubCorner";
import  { Link as Scroll} from "react-scroll";
import { motion } from "framer-motion"
import { useRouter } from 'next/router';
import Link from "next/link";

const Menu: FunctionComponent = ({}) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handle = {
        variantA: { y:56},
        variantB: { y:560 }
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
        <>
            <MenuUL>
                <MenuLinkItem destination={"recipe"} label={"Recipe"}/>
                <MenuLinkItem destination={"projects"} label={"Projects"}/>
                <MenuLinkItem destination={"studio"} label={"Studio"}/>
                <MenuLinkItem destination={"people"} label={"People"}/>
            </MenuUL>
            <Handle variants={handle} initial="variantA" animate={!loading? "variantA":"variantB"}></Handle>
        </>
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
                <Scroll to={destination} smooth={true} duration={600} containerId="homeView">{label}</Scroll>
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