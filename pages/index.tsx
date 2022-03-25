import {GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import {BlogPost} from "../@types/schema";
import NotionService from "../services/notion-service";
import BlogCard from "../components/BlogCard";

export const getStaticProps: GetStaticProps = async (context) => {
    const notionService = new NotionService();
    const posts = await notionService.getPublishedBlogPosts()

    return {
        props: {
            posts
        },
    }
}

const Home = ({posts}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const title = 'Test Blog';
    const description = 'Welcome to my Notion Blog.'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>

            <div className="min-h-screen">
                <main >
                    <div>
                        <div>
                            <h1 >Notion + NextJS Sample Blog</h1>
                        </div>
                        <div >
                            {posts.map((post: BlogPost) => (
                                <BlogCard key={post.id} post={post}/>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};

export default Home;