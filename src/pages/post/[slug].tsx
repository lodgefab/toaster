import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import NotionService from "../../services/notion-service";
import Recipe from "../../components/organisms/Recipe";
import { motion, MotionConfig } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReactNode } from "react";
import styled from "@emotion/styled";
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

interface VideoProps {
  src?: string;
}
interface AnchorProps {
  href?: string;
  children?: ReactNode;
}

const Post = ({
  markdown,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const components = {
    video: ({ src }: VideoProps) => {
      return <video src={src} />;
    },
    a: ({ href, children }: AnchorProps) => {
      const isYoutube = href ? href.includes("youtube") : null;
      const isTwitter = href ? href.includes("twitter") : null;
      const createYouTubeEmbedLink = (url: string) => {
        return url.replace(
          "https://www.youtube.com/watch?v=",
          "https://www.youtube.com/embed/"
        );
      };
      const trimTwitterID = (url: string) => {
        return url.replace(
          "https://www.youtube.com/watch?v=",
          "https://www.youtube.com/embed/"
        );
      };
      if (isYoutube && href) {
        const embedLink = createYouTubeEmbedLink(href);
        return (
          <YouTubeWrap>
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              width="510"
              height="315"
              src={embedLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </YouTubeWrap>
        );
      } else if (isTwitter) {
        return <a href={href}>{children}</a>;
      } else {
        return <a href={href}>{children}</a>;
      }
    },
  };
  const YouTubeWrap = styled.span`
    display: block;
    position: relative;
    width: 100%;
    &:before {
      content: "";
      display: block;
      padding-top: 75%; /* 高さを幅の75%に固定 */
    }
  `;

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
      <Recipe
        title={post.title}
        version={post.version}
        model={post.model}
        resource={post.resource}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {markdown}
        </ReactMarkdown>
      </Recipe>
    </motion.div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  // @ts-ignore
  const p = await notionService.getSingleBlogPost(context.params?.slug);

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

  const posts = await notionService.getPublishedBlogPosts();

  // Because we are generating static paths, you will have to redeploy your site whenever
  // you make a change in Notion.
  const paths = posts.map((post) => {
    return `/post/${post.slug}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export default Post;
