import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { color, font, zIndex } from "../../styles";
import { GithubCorner } from "../Atoms/GithubCorner";
import  { Link as Scroll} from "react-scroll";


const BlogCard: FunctionComponent = ({}) => {

    return (
        <MenuUL>
            <MenuLinkItem destination={"recipe"} label={"Recipe"}/>
            <MenuLinkItem destination={"projects"} label={"Projects"}/>
            <MenuLinkItem destination={"studio"} label={"Studio"}/>
            <MenuLinkItem destination={"people"} label={"People"}/>
        </MenuUL>
    );
};

export default BlogCard;

const MenuLinkItem: React.FC<{ destination: string, label:string }> = ({ destination, label }) => {
    // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する
    return (
        <MenuLI>
            <Scroll to={destination} smooth={true} duration={600} containerId="homeView">{label}</Scroll>
        </MenuLI>
    )
}

const MenuUL = styled.ul`
    
`

const MenuLI = styled.li`
    ${font.subtitle1};
    color:${color.content.dark};
`
