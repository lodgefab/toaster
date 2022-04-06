import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { color, font, zIndex } from "../../styles";
import { GithubCorner } from "../Atoms/GithubCorner";



const BlogCard: FunctionComponent = ({}) => {

    return (
        <MenuUL>
            <MenuLI><Link href={"/#recipe"}>Recipe</Link></MenuLI>
            <MenuLI><Link href={"/#projects"}>Projects</Link></MenuLI>
            <MenuLI><Link href={"/#studio"}>Studio</Link></MenuLI>
            <MenuLI><Link href={"/#people"}>People</Link></MenuLI>
            <MenuLI><Link href={"/#studio"}>Studio</Link></MenuLI>
        </MenuUL>
    );
};

export default BlogCard;

const MenuUL = styled.ul`
    
`

const MenuLI = styled.li`
    ${font.subtitle1};
    color:${color.content.dark};
`