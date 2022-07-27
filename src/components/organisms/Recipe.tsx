import { FunctionComponent, ReactNode, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { color, curve, font, media, zIndex } from "../../styles";
import StepView from "../molecules/ModelView";
import Image from "next/image";
import Link from "next/link";
import { Resource } from "../../../@types/schema";
import { useMedia } from "../../utils/useMedia";
import { getResources } from "../../utils/gtm";

type Props = {
  children: ReactNode;
  title: string;
  version: string;
  model: string;
  resource: Resource[];
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

const Recipe: React.FC<Props> = ({
  children,
  title,
  version,
  model,
  resource,
}) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const isMobile = useMedia().isMobile;
  return (
    <Contents>
      {!isMobile && (
        <WrapperLeftComponent
          width={leftColumnWidth}
          model={model}
          resource={resource}
          isOn={isOn}
        />
      )}
      <WrapperRight width={leftColumnWidth}>
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
          <Version>{"v" + version}</Version>
        </Title>
        {isMobile && (
          <WrapperLeftComponent
            width={leftColumnWidth}
            model={model}
            resource={resource}
            isOn={isOn}
          />
        )}
        <MarkdownStyle>{children}</MarkdownStyle>
      </WrapperRight>
    </Contents>
  );
};

export default Recipe;

const WrapperLeftComponent: React.FC<{
  width: number;
  model: string;
  resource: Resource[];
  isOn: boolean;
}> = ({ width, model, resource, isOn }) => {
  return (
    <WrapperLeft width={width}>
      {model && (
        <ThreeDView height={width}>
          <CanvasWrapper data-ison={isOn}>
            <StepView model={model}></StepView>
          </CanvasWrapper>
          {/* <Switch
                                onClick={toggleSwitch}
                            >
                            <Image src={isOn?'/icons/shrink.svg':'/icons/expand.svg'} width={24} height={24} alt={'expand or shrink'}/>
                            </Switch> */}
        </ThreeDView>
      )}

      <ResourceWrap>
        {resource &&
          resource.map((resource, index) => (
            <Resource
              key={index}
              href={resource.href}
              target={"_blank"}
              onClick={() => getResources("get_resources_button")}
            >
              <span>{resource.plain_text}</span>
            </Resource>
          ))}
      </ResourceWrap>

      {/* {resource && (
        <FinalChain>
          Certified on
          <span>
            <a
              href="https://final-aim.com/final-chain-beta-launch"
              target={"_blank"}
              rel="noreferrer"
            >
              final chain
            </a>
          </span>
        </FinalChain>
      )} */}
    </WrapperLeft>
  );
};

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
        left:calc(50% - 16px);
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
  ${media.mdsp`
            position:relative;
            width:100%;
            margin:0 0 32px;
        `}
`;
const WrapperRight = styled(motion.article)<{ width: number }>`
  position: relative;
  margin: 0px 0 0 ${(props) => props.width + 32 + "px"};
  max-width: 640px;
  /* margin:0 auto 0 ; */
  text-align: left;
  border: 1px solid ${color.content.dark};
  padding: 64px;
  color: ${color.content.dark};
  ${media.mdsp`
        margin:0;
        border:0px;
        padding:32px 32px;
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
    font-weight: bold;
    color: ${color.secondary};
  }
  ul {
    li {
      position: relative;
      &:before {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: -12px;
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background-color: ${color.content.dark};
        transform: translate(0, -50%);
      }
    }
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
        padding:16px 0;
        margin:0 0 32px 0;
    `}
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
const ResourceWrap = styled.div`
  width: 100%;
  overflow-x: auto;
  ${media.mdsp`
        flex-direction: row;
    `}
`;
const Resource = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding: 4px 8px 4px 8px;
  margin: 0 0 8px 0;
  border: 1px solid ${color.content.superLight};
  color: ${color.content.dark};
  border-radius: 18px;
  filter: brightness(1);
  transition: ${curve.button};
  span {
    ${font.body2};
  }
  &:hover {
    text-decoration: none;
    filter: brightness(0.8);
  }
  &:before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0 8px 0 0;
    background-image: url("/icons/github.svg");
    background-size: contain;
  }
  &:after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 0 0 8px;
    background-image: url("/icons/external_circle.svg");
    background-size: contain;
  }
`;

const FinalChain = styled.p`
  ${font.body2};
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  span {
    display: flex;
    padding: 4px 0px;
    margin: 0 0 0 8px;
  }
  a {
    display: inline-flex;
    align-items: flex-start;
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
  a:after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 0px 0 4px;
    background-image: url("/icons/external.svg");
    background-size: contain;
  }
`;
