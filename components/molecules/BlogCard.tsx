import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../../@types/schema";
import dayjs from 'dayjs'
import styled from '@emotion/styled'

type BlogCardProps = {
    post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({post}) => {

    return (
        <Link href={`/post/${post.slug}`} passHref>
                <Card>
                    <Image src={post.cover} alt=""  />
                        <div>
                            <span>
                                <h4>{dayjs(post.date).format('LL')}</h4>
                            </span>
                            <span>
                                <h3>{post.title}</h3>
                            </span>

                            <span>
                                <p>{post.description}</p>
                            </span>

                            <span>
                                {
                                    post.tags.map(tag => (
                                        <span key={tag.id}>#{tag.name}</span>
                                    ))
                                }
                            </span>
                        </div>
                </Card>
            
        </Link>
    );
};

export default BlogCard;

const Card = styled.a`
    display:flex;
    flex-direction: column;
    max-width:320px;
`

const Image = styled.img`
    width:100%;
    height:320px;
    object-fit:cover ;
`