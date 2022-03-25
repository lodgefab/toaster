import {FunctionComponent} from "react";
import Link from "next/link";
import {BlogPost} from "../@types/schema";
import dayjs from 'dayjs'

type BlogCardProps = {
    post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)

const BlogCard: FunctionComponent<BlogCardProps> = ({post}) => {

    return (
        <Link href={`/post/${post.slug}`}>
            <a>
                <div key={post.title}>
                    <div>
                        <img src={post.cover} alt="" />
                    </div>
                    <div>
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
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default BlogCard;