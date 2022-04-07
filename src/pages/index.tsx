import {GetServerSideProps, GetStaticProps, InferGetStaticPropsType} from "next";
import Head from "next/head";
import {BlogPost} from "../../@types/schema";
import NotionService from "../services/notion-service";
import BlogCard from "../components/molecules/BlogCard";
import styled from "@emotion/styled";
import Footer from "../components/molecules/Footer";
import Layout from "../components/Layout";
import { color, font } from "../styles";
import { Home } from "../components/organisms/Home";


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

            <Home posts={posts} ></Home>
        </>
    )
};

export default Page;
