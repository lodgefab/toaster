import {FunctionComponent} from "react";
import Link from "next/link";
import {ProjectPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { color, font, zIndex, motionConfig } from "../../styles";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
    post: ProjectPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const ProjectCard: FunctionComponent<ProjectCardProps> = ({post}) => {
    const parent = {
        variantA: { },
        variantB: { }
    }

    const bg = {
        variantA: { opacity:0},
        variantB: { 
            opacity:1 ,
            transition: {
                duration:0.2
            }
        },
        
    }
    const title = {
        variantA: { opacity:0},
        variantB: { 
            opacity:1 ,
            transition: {
                duration:0.2
            }
        },
        
    }
    const img = {
        variantA: { scale:1},
        variantB: { scale:1.1 }
    }


    
    return (
            <motion.div
                variants={motionConfig.fadeInUp}
            >
                <Link href={`/project/${post.slug}`} passHref>
                    <Card
                        variants={parent}
                        initial="variantA"
                        whileHover="variantB"
                    >
                        
                        
                                <ImageWrap
                                    variants={img}
                                >
                                    <Image src={post.cover} alt="" layout={"fill"} objectFit={"cover"} loading={"eager"} priority={true} unoptimized={false}/>
                                </ImageWrap>
                        <BG  variants={bg} ></BG>
                        <Info
                            variants={title}
                        >
                            <ProjectTitle
                            >{post.title}</ProjectTitle>
                            <ProjectSubTitle
                            >{post.description}</ProjectSubTitle>
                        </Info>
                    </Card>
                </Link>
            </motion.div>
    );
};

export default ProjectCard;

const Card = styled(motion.a)`
    display:flex;
    flex-direction: column;
    /* max-width:320px; */
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
/*     
    :before{
        content: '';
        width: 100%;
        height:100%;
        position: absolute;
        left:-10px;
        top:8px;
        border:solid 1px ${color.content.dark};
    } */
    
`

const BG = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,.12);
`

const ImageWrap = styled(motion.div)`
    position: relative;
    width:100%;
    height:320px;
    /* object-fit:cover ; */
    padding:0 24px 24px 24px;
    /* border:solid 1px ${color.content.dark}; */
    
    `
const Info = styled(motion.div)`
        position: absolute;
        left:16px;
        right: 16px;
        bottom:16px;
    `
const ProjectTitle = styled(motion.h3)`
    ${font.subtitle1};
    color:${color.background.white};
`
const ProjectSubTitle = styled(motion.p)`
    
    ${font.subtitle2};
    color:${color.background.white};
`

const HashTag = styled.p`
    ${font.subtitle2};
    color:${color.content.dark};
    position:absolute;
    left:-60px;
    bottom:0px;
    transform: rotate(90deg);
    transform-origin: center right;
`