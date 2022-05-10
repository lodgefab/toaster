import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import NotionService from "../../services/notion-service";
import Project from "../../components/organisms/Project";
import { motion, MotionConfig } from "framer-motion";
import ReactMarkdown from "react-markdown";

const Post = ({
  markdown,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>{post.title}</title>
        <meta
          name={"description"}
          title={"description"}
          content={post.description}
        />
        <meta name={"og:title"} title={"og:title"} content={post.title} />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={post.description}
        />
        <meta name={"og:image"} title={"og:image"} content={post.cover} />
      </Head>
      <Project title={post.title} description={post.description}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Project>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  // @ts-ignore
  const p = await notionService.getSingleProjectPost(context.params?.slug);

  if (!p) {
    throw "";
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
};

export async function getStaticPaths() {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedProjectPosts();

  // Because we are generating static paths, you will have to redeploy your site whenever
  // you make a change in Notion.
  const paths = posts.map((post) => {
    return `/project/${post.slug}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export default Post;
