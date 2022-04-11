import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { color, font, zIndex } from "../../styles";
import { GithubCorner } from "../Atoms/GithubCorner";
import { motion } from "framer-motion";
import Image from "next/image";

type BlogCardProps = {
    post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({post}) => {
    const parent = {
        variantA: { },
        variantB: { }
    }

    const bg = {
        variantA: { x:-8, y:8},
        variantB: { x:-16, y:16 }
    }
    const img = {
        variantA: { scale:1},
        variantB: { scale:1.05 }
    }

    const easing =[.6, -0.05, .01, .99]

    const fadeInUp = {
        initial:{
            y:60,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.6,
                ease:easing
            }
        },
        variantA:{
        },
        variantB:{}
    }

    
    return (
            <motion.div
                variants={fadeInUp}
            >
                <Card
                    variants={parent}
                    initial="variantA"
                    whileHover="variantB"
                >
                    
                    <BG  variants={bg} ></BG>
                    <Link href={`/post/${post.slug}`}  passHref>
                        <Contents>
                            <RecipeTitle>{post.title}</RecipeTitle>
                            <Date>{dayjs(post.date).format('LL')}</Date>
                            <ImageWrap variants={img}>
                                <Image src={post.cover} alt="" layout={"fill"} objectFit={"cover"} loading={"eager"} priority={true} unoptimized={false}/>
                            </ImageWrap>
                            <HashTag>
                                {
                                    post.tags.map(tag => (
                                        <span key={tag.id}>#{tag.name}</span>
                                    ))
                                }
                            </HashTag>
                        </Contents>
                    </Link>
                    
                    {/* <GithubCorner/> */}
                </Card>
            </motion.div>
    );
};

export default BlogCard;

const Card = styled(motion.div)`
    display:flex;
    flex-direction: column;
    max-width:320px;
    width:100%;
    position: relative;
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
    width: 100%;
    height:100%;
    position: absolute;
    border:solid 1px ${color.content.dark};
`


const Contents = styled.a`
    background-color: ${color.background.base};
    z-index: ${zIndex.elevation.ev5};
    border:solid 1px ${color.content.dark};
    width:100%;
    height:100%;
`
const ImageWrap = styled(motion.div)`
    position: relative;
    width:100%;
    height:320px;
    /* object-fit:cover ; */
    padding:0 24px 24px 24px;
`
const RecipeTitle = styled.h3`
    ${font.subtitle2};
    color:${color.content.dark};
    margin:16px 16px 0;
    padding:8px;
    border-top: solid 1px ${color.content.dark};
    border-bottom: solid 1px ${color.content.dark};
`
const Date = styled.p`
    ${font.body2};
    color:${color.content.dark};
    text-align: center;
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