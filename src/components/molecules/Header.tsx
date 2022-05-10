import { FunctionComponent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { color, font, media, zIndex } from "../../styles";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMedia } from "../../utils/useMedia";

type Props = {
  height: number;
};

const Header: React.VFC<Props> = ({ height }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isSPMenuOpen, setSPMenuOpen] = useState(false);
  const isMobile = useMedia().isMobile;

  const spMenu = {
    variantA: { rotate: 0 },
    variantB: { rotate: -90 },
  };

  const stagger = {
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleStart = (url: string) => {
    if (url !== router.pathname) {
      setLoading(true);
    }
  };
  const handleComplete = (url: string) => {
    if (url !== router.pathname) {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <Container height={height}>
      <Link href={"/"} passHref>
        <Logo>🍞 Toaster</Logo>
      </Link>
      {isMobile && (
        <SPMenu
          onClick={() => {
            setSPMenuOpen(!isSPMenuOpen);
          }}
          variants={spMenu}
          initial={"variantA"}
          animate={isSPMenuOpen ? "variantB" : "variantA"}
        />
      )}
      <HeaderUL
        variants={stagger}
        animate={isSPMenuOpen ? "animate" : "initial"}
      >
        <HeaderLinkItem
          destination={"recipe"}
          label={"Recipe"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        />
        <HeaderLinkItem
          destination={"projects"}
          label={"Projects"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        />
        <HeaderLinkItem
          destination={"studio"}
          label={"Studio"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        />
        <HeaderLinkItem
          destination={"people"}
          label={"People"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        />
      </HeaderUL>
    </Container>
  );
};

export default Header;

const HeaderLinkItem: React.FC<{
  destination: string;
  label: string;
  height: number;
  isSPMenuOpen: boolean;
}> = ({ destination, label, height, isSPMenuOpen }) => {
  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する

  const { pathname } = useRouter();
  const isMobile = useMedia().isMobile;
  const lgMenu = {
    visible: { y: 0 },
    hidden: {
      y: 12,
      transitions: {
        duration: 0.2,
      },
    },
  };
  const spMenu = {
    animate: {
      y: 0,
      opacity: 1,
    },
    initial: {
      y: -8,
      opacity: 0,
      transitions: {
        duration: 0.2,
      },
    },
  };

  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する
  return (
    //" Expected server HTML to contain a matching <div> in <div>." warning が出てるのでメディクエリを使った方法を考える
    isMobile ? (
      <LiAnimationWrap
        variants={spMenu}
        animate={isSPMenuOpen ? "animate" : "initial"}
      >
        {pathname === "/" && (
          <HeaderLI>
            <Scroll
              to={destination}
              smooth={true}
              duration={600}
              offset={-1 * height}
            >
              {label}
            </Scroll>
          </HeaderLI>
        )}
        {pathname !== "/" && (
          <Link href={`/?to=${destination}`} passHref={true}>
            <HeaderLI>{label}</HeaderLI>
          </Link>
        )}
      </LiAnimationWrap>
    ) : (
      <>
        {pathname === "/" && (
          <LiWrap>
            <HeaderLI variants={lgMenu} initial="hidden" whileHover={"visible"}>
              <Scroll
                to={destination}
                smooth={true}
                duration={600}
                offset={-1 * height}
              >
                {label}
              </Scroll>
            </HeaderLI>
          </LiWrap>
        )}
        {pathname !== "/" && (
          <LiWrap>
            <Link href={`/?to=${destination}`} passHref={true}>
              <HeaderLI
                variants={lgMenu}
                initial="hidden"
                whileHover={"visible"}
              >
                {label}
              </HeaderLI>
            </Link>
          </LiWrap>
        )}
      </>
    )
  );
};

const Container = styled(motion.div)<{ height: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1040px;
  height: ${(props) => props.height}px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndex.elevation.ev15};
  ${media.mdsp`
        padding:0 32px;
    `}
`;

const Logo = styled.h1`
  ${font.h2};
  color: ${color.content.dark};
  cursor: pointer;
  ${media.mdsp`
        ${font.h3};
    `}
`;

const HeaderUL = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  ${media.mdsp`
        position:absolute;
        top:100%;
        right:32px;
        flex-direction: column;
    `}
`;

const HeaderLI = styled(motion.li)`
  ${font.subtitle1};
  color: ${color.content.dark};
  padding: 8px 0;
  cursor: pointer;
  ${media.mdsp`
        padding:4px 12px;
        margin:0 0 8px 0;
        background-color:#e0e0e0;
        border-radius:16px;
    `}
`;

const LiWrap = styled.div`
  height: 32px;
  overflow: hidden;
  border-bottom: solid 1px ${color.content.dark};
  margin: 0px 16px;
  ${media.mdsp`
        border:0px;
        overflow:visible;
        margin:0px;
    `}
`;
const LiAnimationWrap = styled(motion.div)``;

const SPMenu = styled(motion.div)`
  width: 32px;
  height: 32px;
  padding: 6px;
  background-image: url("/icons/handle.svg");
  background-size: contain;
  background-position: center;
`;
