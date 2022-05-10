import {
  GetServerSideProps,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { BlogPost } from "../../@types/schema";
import NotionService from "../services/notion-service";
import RecipeCard from "../components/molecules/RecipeCard";
import styled from "@emotion/styled";
import Footer from "../components/molecules/Footer";
import Layout from "../components/Layout";
import { color, font } from "../styles";
import { Home } from "../components/organisms/Home";
import { motion } from "framer-motion";

export async function getServerSideProps() {
  const notionService = new NotionService();
  const blogPosts = await notionService.getPublishedBlogPosts();
  const projectPosts = await notionService.getPublishedProjectPosts();

  return {
    props: {
      blogPosts,
      projectPosts,
    },
  };
}

const Page = ({
  blogPosts,
  projectPosts,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const title = "Toaster";
  const description =
    "Toasterは料理のレシピをシェアするようにものづくりのノウハウをシェアし、市民の手でできるものづくりの範囲を広げていく活動です";

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>{title}</title>
        <meta
          name={"description"}
          title={"description"}
          content={description}
        />
        <meta name={"og:title"} title={"og:title"} content={title} />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={title}
        />
      </Head>

      <Home blogPosts={blogPosts} projectPosts={projectPosts}></Home>
    </motion.div>
  );
};

export default Page;
