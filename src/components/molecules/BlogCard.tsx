import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'
import { color, font, zIndex } from "../../styles";
import { GithubCorner } from "../Atoms/GithubCorner";

type BlogCardProps = {
    post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({post}) => {

    return (
        
            <Card>
                <Link href={`/post/${post.slug}`} passHref>
                    <Contents>
                        <RecipeTitle>{post.title}</RecipeTitle>
                        <Image src={post.cover} alt=""  />
                        <HashTag>{dayjs(post.date).format('LL')}</HashTag>
                            {
                                post.tags.map(tag => (
                                    <span key={tag.id}>#{tag.name}</span>
                                ))
                            }
                    </Contents>
                </Link>
                {/* <GithubCorner/> */}
            </Card>
    );
};

export default BlogCard;

const Card = styled.div`
    display:flex;
    flex-direction: column;
    max-width:320px;
    width:100%;
    position: relative;
    
    :before{
        content: '';
        width: 100%;
        height:100%;
        position: absolute;
        left:-10px;
        top:8px;
        border:solid 1px ${color.content.dark};
    }
    
`
const Contents = styled.a`
    background-color: ${color.background.base};
    z-index: ${zIndex.elevation.ev5};
    border:solid 1px ${color.content.dark};
`
const Image = styled.img`
    position: relative;
    width:100%;
    height:320px;
    object-fit:cover ;
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

const HashTag = styled.p`
    ${font.subtitle2};
    color:${color.content.dark};
`