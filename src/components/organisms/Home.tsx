import styled from "@emotion/styled";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { BlogPost, People, ProjectPost } from "../../../@types/schema";
import {
  color,
  font,
  media,
  motionConfig,
  zIndex,
  spring,
  easing,
} from "../../styles";
import RecipeCard from "../molecules/RecipeCard";
import ProjectCard from "../molecules/ProjectCard";
import { wrap } from "popmotion";
import HeroView from "../molecules/HeroView";
import SuccessModal from "../molecules/SuccessModal";
import { AppContext } from "../../contexts/AppContextProvider";

type Props = {
  blogPosts: BlogPost[];
  projectPosts: ProjectPost[];
  // people:People[]
};

export const Home: React.VFC<Props> = ({ blogPosts, projectPosts }) => {
  const stagger = {
    animate: (i: number) => ({
      transition: {
        staggerChildren: 0.1,
        delayChildren: i,
      },
    }),
  };

  const [isReady, toggleReady] = useState(false);
  const letterUp = {
    initial: {
      y: 8,
      color: "#eeeeee",
    },
    animate: {
      y: [8, -8, 0],
      color: ["#eeeeee", "#d19724ec", "#333333"],
      transition: {
        duration: 0.5,
        time: [0, 0.2, 1],
        spring,
      },
    },
  };
  const descUp = {
    initial: {
      y: 8,
      color: "#eeeeee",
    },
    animate: {
      y: 0,
      color: ["#eeeeee", "#d19724ec", "#333333"],
      transition: {
        duration: 0.8,
        delay: 1,
        easing,
      },
    },
  };
  const studioGalleryVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const galleyImages = [
    "/images/studio001.jpg",
    "/images/studio002.jpg",
    "/images/studio003.jpg",
    "/images/studio004.jpg",
    "/images/studio005.jpg",
    "/images/studio006.jpg",
  ];

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, galleyImages.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    toggleReady(true);
  }, []);

  return (
    <>
    <Container id="homeView">
      <Hero>
        <HeroLeft>
          <HeroView model={"Hero003"} isReady={isReady}></HeroView>
        </HeroLeft>
        <HeroRight
          animate={isReady ? "animate" : "initial"}
          initial={"initial"}
        >
          <HeroTitle variants={stagger} custom={1}>
            <Character variants={letterUp}>T</Character>
            <Character variants={letterUp}>o</Character>
            <Character variants={letterUp}>a</Character>
            <Character variants={letterUp}>s</Character>
            <Character variants={letterUp}>t</Character>
            <Character variants={letterUp}>e</Character>
            <Character variants={letterUp}>r</Character>
          </HeroTitle>
          <motion.div variants={stagger} custom={2}>
            <HeroDescription variants={descUp}>
              『LODGE Toaster』は、
              <br />
              ヤフー社内のオープンコラボレーションハブ・LODGE内のfabスペースに日々持ち込まれる実験プロジェクトや社内外のパートナーとの共同プロジェクトの中で得られた知見や副産物を「レシピ」として公開し、オープンソースで発信していく取り組みです。
            </HeroDescription>
          </motion.div>
        </HeroRight>
      </Hero>
      <motion.div
        variants={stagger}
        custom={2}
        animate={isReady ? "animate" : "initial"}
        initial={"initial"}
      >
        <Title id="recipe" variants={motionConfig.fadeInUp}>
          <span>Recipe</span>
        </Title>
      </motion.div>
      <RecipeGrid
        variants={stagger}
        custom={2.2}
        animate={isReady ? "animate" : "initial"}
        initial={"initial"}
      >
        {blogPosts.map((post: BlogPost) => (
          <RecipeCard key={post.id} post={post} />
        ))}
      </RecipeGrid>
      <Title id={"projects"}>
        <span>Projects</span>
      </Title>
      <ProjectGrid>
        {projectPosts.map((post: ProjectPost) => (
          <ProjectCard key={post.id} post={post} />
        ))}
      </ProjectGrid>
      <Title id={"studio"}>
        <span>Studio</span>
      </Title>
      <StudioGrid>
        <SlideWrap>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={galleyImages[imageIndex]}
              custom={direction}
              variants={studioGalleryVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
        </SlideWrap>
        <StudioDesc>
          Toasterは、紀尾井町17Fに位置するLODGEのFabスペースを拠点に活動しています
          <br />
          <br />
          機材：
          <br />
          光造形3Dプリンタ[Form2] 1台、​熱溶解積層方式3Dプリンタ[Ender3]
          2台、CO2レーザーカッター[Trotec]、CNCミリングマシン1台[KitMill
          BT200]、家庭用射出成型機[INARI F06]、その他一般工具
        </StudioDesc>
        <ThumbnailGrid>
          {galleyImages.map((value, index) => (
            <StudioGalleryImg
              src={value}
              key={index}
              onHoverStart={() => setPage([index, 1])}
              iscursor={index == imageIndex ? "true" : "false"}
              onClick={() => setPage([index, 1])}
            />
          ))}
        </ThumbnailGrid>
      </StudioGrid>
    </Container>
    <SuccessModal/>
    </>
  );
};

const Container = styled(motion.div)`
  margin: 0px 0 128px 0;
  ${media.mdsp`
            padding:0 32px;
            margin:0px 0 64px 0;
        `}
`;
const Hero = styled.div`
  position: relative;
  width: 100%;
  ${media.mdsp`
            margin:0 -32px;
            width:100vw;
        `}
`;
const HeroRight = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 30vw;
  ${media.mdsp`
      position:relative;
            width:100%;
            padding:0 32px 32px 32px;
            
            
            transform:none;
        `}
`;
const HeroTitle = styled(motion.h1)`
  margin: 0 0 16px 0;
  overflow: hidden;
`;
const Character = styled(motion.span)`
  display: inline-block;
  ${font.h1};
  ${media.mdsp`
    /* ${font.h2}; */
  `}
`;

const HeroDescription = styled(motion.p)`
  ${font.article1};
  ${media.mdsp`
    ${font.article2};
  `}
`;

const HeroLeft = styled.div`
  height: 480px;
  box-sizing: border-box;
  canvas {
    touch-action: none;
  }
  ${media.lg`
    padding:0 0 0 30vw;
  `}
  ${media.mdsp`
            width:100vw;
            height:50vh;
        `}
`;

const Title = styled(motion.h1)`
  display: inline-block;
  position: relative;
  margin: 128px 0 64px 0;
  padding: 8px 32px;
  text-align: left;
  ${font.h1};
  color: ${color.background.base};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${color.content.dark};
  /* z-index:${zIndex.elevation.ev5}; */
  span {
    position: relative;
    z-index: ${zIndex.elevation.ev5};
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    border: 0.5px solid ${color.content.dark};
    background-color: ${color.background.base};
    /* z-index:${zIndex.base}; */
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    bottom: -8px;
    left: -8px;
    height: 100%;
    width: 100%;
    /* border:0.5px solid ${color.content.dark} */
    background-image: url("/icons/grid.svg");
    /* z-index:${zIndex.effect}; */
  }
`;
const RecipeTitle = styled(Title)`
  margin: 0px 0 64px 0;
`;
const RecipeGrid = styled(motion.div)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: 100%;
  ${media.md`
                grid-template-columns:1fr 1fr;
            `}
  ${media.sp`
                grid-template-columns:1fr;
            `}
`;
const ProjectGrid = styled(motion.div)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
  width: 100%;
  ${media.md`
                grid-template-columns:1fr 1fr;
                margin:0 -32px;
                width:100vw;
            `}
  ${media.sp`
                grid-template-columns:1fr;
                margin:0 -32px;
                width:100vw;
            `}
`;

const StudioGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 2.5fr 1fr;
  gap: 16px;
  width: 100%;
  ${media.sp`
            /* grid-template-rows:auto 1fr; */
            grid-template-columns:1fr;
        `}
`;
const SlideWrap = styled.div`
  ${media.lg`    
            grid-row: 1 / 3;
            grid-column: 1/2;
        `}
  ${media.md`    
            grid-row: 1 / 3;
            grid-column: 1/2;
        `}
        overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.lg`
            width:800px;
            height:450px;
        `}
  ${media.mdsp`
            width:100%;
            height:450px;
        `}
        img {
    position: absolute;
    max-width: 100%;
  }
`;
const StudioDesc = styled.p`
  ${media.lg`    
            grid-row: 2/3;
            grid-column: 2/3;
        `}
  ${media.md`    
            grid-row: 2/3;
            grid-column: 2/3;
        `}
        
        ${font.body2};
  color: ${color.content.dark};
`;
const ThumbnailGrid = styled.div`
  ${media.lg`    
            grid-row: 1/2;
            grid-column: 2/3;
        `}
  ${media.md`    
            grid-row: 1/2;
            grid-column: 2/3;
        `}
        ${media.sp`
            grid-row: 2/3;
        `}
        
        width:100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2px;
`;
const StudioGalleryImg = styled(motion.img)<{ iscursor: string }>`
  width: 100%;
  height: auto;
  cursor: pointer;
  box-sizing: border-box;
  border: ${(props) =>
    props.iscursor === "true" ? `solid 1px ${color.content.dark}` : `none`};
`;
const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const PeopleItem = styled.div``;
