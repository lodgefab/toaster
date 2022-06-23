import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import NotionService from "../services/notion-service";

import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { media } from "../styles";

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

const Mint = ({}: InferGetStaticPropsType<typeof getServerSideProps>) => {
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
      <IframeWrap>
        <iframe
          src="https://gateway.ipfscdn.io/ipfs/QmRPK2zjmkM8sodgCpyiCbLTvKGJwU3mWcwXwL2AWEBWym/token-drop.html?contract=0x5C8CA8C3A00C1Cd127018899Dd50D4C6E0174c2C&chainId=4"
          width="600px"
          height="600px"
          frameBorder="0"
        ></iframe>
      </IframeWrap>
    </motion.div>
  );
};

export default Mint;

const IframeWrap = styled.div`
  iframe {
    width: 100%;
    ${media.sp`
      width: 100vw;
    `}
  }
`;
