import { FunctionComponent, ReactNode, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { color, font, media, zIndex } from "../../styles";
import StepView from "../molecules/ModelView";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const leftColumnWidth = 320;

const turnIn = {
  initial: {
    scale: 0,
    rotate: 0,
  },
  animate: {
    scale: 1,
    rotate: 180,
    transition: {
      type: "spring",
      duration: 1.2,
      bounce: 0.5,
      delay: 1.8,
    },
  },
};
const scaling = {
  initial: {
    scale: 1,
  },
  whileHover: {
    scale: 1.1,
  },
};

const Project: React.FC<Props> = ({ children, title, description }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <Contents>
      <WrapperRight>
        <Link href="/" passHref>
          <CloseBtnWrap
            variants={scaling}
            initial={"initial"}
            whileHover={"whileHover"}
          >
            <CloseBtn
              variants={turnIn}
              initial={"initial"}
              animate={"animate"}
            />
          </CloseBtnWrap>
        </Link>
        <Title>
          {title}
          <br />
          <span>{description}</span>
        </Title>
        <MarkdownStyle>{children}</MarkdownStyle>
      </WrapperRight>
    </Contents>
  );
};

export default Project;

const Contents = styled.div`
  position: relative;
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr auto;
  margin: 128px 0 128px;
  ${media.sp`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
    `}
  ${media.mdsp`
        margin: 0;
    `}
`;
const CloseBtnWrap = styled(motion.div)`
  position: absolute;
  top: calc((44px + 16px) * -1);
  left: 50%;
  transform: translate(-50%, 0);
  width: 44px;
  height: 44px;
  ${media.mdsp`
        top: -16px;
        left: calc(50% - 16px);
        width:32px;
        height:32px;
    `}
`;
const CloseBtn = styled(motion.div)`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${color.content.dark};
  &:before {
    content: "";
    display: block;
    width: 70%;
    height: 1px;
    background-color: ${color.background.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    content: "";
    display: block;
    width: 70%;
    height: 1px;
    background-color: ${color.background.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const WrapperLeft = styled.div`
  position: fixed;
  width: ${(props: { width: number }) => props.width}px;
  display: flex;
  flex-direction: column;
  ${media.sp`
            position:relative;
            width:100%;
        `}
`;
const WrapperRight = styled(motion.article)`
  position: relative;
  max-width: 640px;
  margin: 0 auto 0;
  text-align: left;
  border: 1px solid ${color.content.dark};
  padding: 64px;
  color: ${color.content.dark};
  ${media.mdsp`
        margin:0;
        border:0px;
        padding:32px;
    `}
`;

const MarkdownStyle = styled.div`
  p,
  h1,
  h2,
  h3 {
    z-index: ${zIndex.elevation.ev5};
  }
  img {
    width: 100%;
    height: auto;
    ${media.mdsp`
            width:100vw;
            margin:0 -32px 0;
        `}
  }
  h1 {
    ${font.h2};
    margin: 2em 0 0;
    padding: 3px 0;
    ${media.mdsp`
            ${font.h3};
        `}
  }
  h2 {
    ${font.h3};
    margin: 1.4em 0 0;
    padding: 3px 0;
    ${media.mdsp`
            ${font.subtitle1};
        `}
  }
  h3 {
    ${font.subtitle1};
    margin: 1em 0 0;
    padding: 3px 0;
    ${media.mdsp`
            ${font.subtitle2};
        `}
  }
  p {
    ${font.article1};
    padding: 3px 0;
    ${media.mdsp`
            ${font.article2};
        `}
  }
  a {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  ${font.h2};
  text-align: center;
  margin: 0 0 64px 0;
  padding: 32px 0;
  box-sizing: border-box;
  border-top: 1px solid ${color.content.middle};
  border-bottom: 1px solid ${color.content.middle};
  ${media.mdsp`
        ${font.h3};
        margin:0 0 32px 0;
        padding:16px 0;
    `}
  span {
    margin: 16px 0 0 0;
    ${font.body1};
    ${media.mdsp`
            ${font.body2};
        `}
  }
`;

const Version = styled.span`
  ${font.body1};
`;

const ThreeDView = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height + "px"};
`;
const Switch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${color.content.middle};
  position: absolute;
  right: 16px;
  bottom: 16px;
  cursor: pointer;
`;

const CanvasWrapper = styled(motion.div)`
  z-index: ${zIndex.base};
  &[data-ison="false"] {
    /* display: none; */
    position: relative;
    width: 100%;
    height: 100%;
  }
  &[data-ison="true"] {
    /* display: visible; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;
const Resource = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  padding: 8px 8px 8px 0;

  &:hover {
    text-decoration: none;
  }
  &:before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0 4px 0 0;
    background-image: url("/icons/document.svg");
    background-size: contain;
  }
  &:after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 0px 0 auto;
    background-image: url("/icons/external.svg");
    background-size: contain;
  }
`;
