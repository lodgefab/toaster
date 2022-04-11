import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BlogPost } from "../../../@types/schema";
import NotionService from "../../services/notion-service";
import { color, font, media } from "../../styles";
import BlogCard from "../molecules/BlogCard";


type Props = {
    posts:BlogPost[]
}


export const Home: React.VFC<Props> = ({posts})=>{
    const stagger ={
        animate:{
            transition:{
                staggerChildren:0.1
            }
        }
    }
    return(
        <Container 
            id='homeView'            
        >
                <Title id="recipe">Recipe</Title>
                <CardGrid variants={stagger}>
                    {posts.map((post: BlogPost) => (
                        <BlogCard key={post.id} post={post}/>
                    ))}
                </CardGrid>
                <Title id={"projects"}>Projects</Title>
                <CardGrid>
                    {posts.map((post: BlogPost) => (
                        <BlogCard key={post.id} post={post}/>
                    ))}
                </CardGrid>
                <Title id={"studio"}>Studio</Title>
                <Map></Map>
                <Title id={"people"}>People</Title>
                <Map></Map>
        </Container>
    )
}



const Container = styled(motion.div)`

`

const Title= styled.h1`
        margin:64px 0 32px 0;
        text-align: left;
        ${font.h2};
        color:${color.content.dark};
`
const CardGrid = styled(motion.div)`
        margin:0 auto;
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:32px;
        width:100%;
        ${media.md`
            grid-template-columns:1fr 1fr;
        `}
        ${media.sp`
            grid-template-columns:1fr;
        `}
`

const Map = styled.div`
    height:320px;
    width:100%;
    background-color: azure;
`