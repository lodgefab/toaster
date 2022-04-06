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
                        <Image src={post.cover} alt=""  />
                        <div>
                            <h4>{dayjs(post.date).format('LL')}</h4>
                            <RecipeTitle>{post.title}</RecipeTitle>
                            {
                                post.tags.map(tag => (
                                    <span key={tag.id}>#{tag.name}</span>
                                ))
                            }
                        </div>
                    </Contents>
                </Link>
                {/* <GithubCorner/> */}
            </Card>
    );
};

export default BlogCard;

const Card = styled.a`
    display:flex;
    flex-direction: column;
    max-width:320px;
    width:100%;
    position: relative;
    border:solid 1px ${color.content.dark};
    
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
`
const Image = styled.img`
    position: relative;
    width:100%;
    height:320px;
    object-fit:cover ;
`
const RecipeTitle = styled.h3`
    ${font.subtitle2};
    color:${color.content.dark};
    margin:0 16px;
    padding:8px;
    border-top: solid 1px ${color.content.dark};
    border-bottom: solid 1px ${color.content.dark};
`