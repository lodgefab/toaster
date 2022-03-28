import {GetServerSideProps, GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import {BlogPost} from "../../@types/schema";
import NotionService from "../services/notion-service";
import BlogCard from "../components/molecules/BlogCard";
import styled from "@emotion/styled";
import Footer from "../components/molecules/Footer";
import Layout from "../components/Layout";


export async function getServerSideProps() {
    const notionService = new NotionService();
    const posts = await notionService.getPublishedBlogPosts()

    return {
        props: {
            posts
        },
    }
}

const Page = ({posts}: InferGetStaticPropsType<typeof getServerSideProps>) => {
    const title = 'Toaster';
    const description = 'Toasterは料理のレシピをシェアするようにものづくりのノウハウをシェアし、市民の手でできるものづくりの範囲を広げていく活動です'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={"description"} title={"description"} content={description}/>
                <meta name={"og:title"} title={"og:title"} content={title}/>
                <meta name={"og:description"} title={"og:description"} content={title}/>
            </Head>

            <Layout>
                {/* <CommonMeta
                    url={`${baseUrl}${currentPath}`}
                    ogpImagePath={`${baseUrl}/images/ogp/OGP.jpg`}
                    title={'TOP'}
                /> */}
                <CardGrid>
                    {posts.map((post: BlogPost) => (
                        <BlogCard key={post.id} post={post}/>
                    ))}
                </CardGrid>
            </Layout>
        </>
    )
};

export default Page;



const Title= styled.h1`
    text-align: center;

`
const CardGrid = styled.div`
    display: grid;
    grid-template-columns:auto auto auto;
    gap:32px;
    max-width:calc(320px * 3 + 32px * 2);
    margin:0 auto;
`