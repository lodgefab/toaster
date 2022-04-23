import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BlogPost, ProjectPost } from "../../../@types/schema";
import NotionService from "../../services/notion-service";
import { color, font, media } from "../../styles";
import RecipeCard from "../molecules/RecipeCard";
import ProjectCard from "../molecules/ProjectCard";


type Props = {
    blogPosts:BlogPost[],
    projectPosts:ProjectPost[]
}


export const Home: React.VFC<Props> = ({blogPosts, projectPosts})=>{
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
                <RecipeGrid variants={stagger}>
                    
                    {blogPosts.map((post: BlogPost) => (
                        <RecipeCard key={post.id} post={post}/>
                    ))}
                </RecipeGrid>
                <Title id={"projects"}>Projects</Title>
                <ProjectGrid>
                    {projectPosts.map((post: ProjectPost) => (
                        <ProjectCard key={post.id} post={post}/>
                    ))}
                </ProjectGrid>
                <Title id={"studio"}>Studio</Title>
                <Map></Map>
                <Title id={"people"}>People</Title>
                <Map></Map>
        </Container>
    )
}



const Container = styled(motion.div)`
    margin:0 0 128px 0;
`

const Title= styled.h1`
        margin:64px 0 32px 0;
        text-align: left;
        ${font.h2};
        color:${color.content.dark};
`
const RecipeGrid = styled(motion.div)`
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
const ProjectGrid = styled(motion.div)`
        margin:0 auto;
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        gap:2px;
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