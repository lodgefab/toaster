import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BlogPost, ProjectPost } from "../../../@types/schema";
import NotionService from "../../services/notion-service";
import { color, font, media } from "../../styles";
import RecipeCard from "../molecules/RecipeCard";
import ProjectCard from "../molecules/ProjectCard";
import Image from 'next/image'
import { wrap } from "popmotion";


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

    const studioGalleryVariants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
            },
            center: {
            zIndex: 1,
            x: 0,
            opacity: 1
            },
            exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    }

    const galleyImages = [
        '/images/studio001.jpeg',
        '/images/studio002.jpeg',
        '/images/studio003.jpeg',
        '/images/studio004.jpeg',
        '/images/studio005.jpeg',
        '/images/studio006.jpeg',
    ]

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    }

    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, galleyImages.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

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
                    <SlideWrap>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                            key={page}
                            src={galleyImages[imageIndex]}
                            custom={direction}
                            variants={studioGalleryVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                                }
                            }}
                            />
                        </AnimatePresence>
                    </SlideWrap>
                <StudioGrid>
                    {/* <Image src={'/images/studio_othro.png'} alt={''} width={600} height={450}/> */}
                    <StudioDesc>光造形3Dプリンタ[Form2] 1台、​熱溶解積層方式3Dプリンタ[Ender3] 2台、CO2レーザーカッター[Trotec]、CNCミリングマシン1台[KitMill BT200]、家庭用射出成型機[INARI F06]、その他一般工具</StudioDesc>
                    <StudioGallery>
                        {galleyImages.map((value,index) => (
                            <StudioGalleryImg src ={value} key={index} onHoverStart={()=>setPage([index,1])}/>
                        ))}
                        
                    </StudioGallery>
                </StudioGrid>
                <Title id={"people"}>People</Title>
                <StudioGrid></StudioGrid>
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

const StudioGrid = styled.div`
    display: grid;
    grid-template-columns:3fr 1fr;
    width:100%;
`
const StudioDesc = styled.p`
    ${font.body2};
    color:${color.content.dark};
`
const StudioGallery = styled.div`
    width:100%;
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:2px;
`
const StudioGalleryImg = styled(motion.img)`
    width:100px;
    height:auto;
`
const SlideWrap = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width:800px;
    height:450px;
    img{
        position: absolute;
        max-width:100%;
    }
`