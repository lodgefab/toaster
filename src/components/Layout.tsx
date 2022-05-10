import React, { ReactNode, useEffect } from "react";
import styled from "@emotion/styled";
import Footer from "./molecules/Footer";
import Header from "./molecules/Header";
import NextNProgress from "nextjs-progressbar";
import { color, media } from "../styles";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const HeaderHeight = 56;

  return (
    <Wrapper>
      {/* <NextNProgress
        color={color.primary}
      /> */}
      <Header height={HeaderHeight} />
      <Contents HeaderHeight={HeaderHeight}>{children}</Contents>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
  /* height:100vh; */
  max-width: 1040px;
  margin: 0 auto;

  ${media.sp`
      width:100%;
      padding:0;
    
    `}
`;

const Left = styled.div`
  background-color: blueviolet;
  width: 200px;
`;

const Contents = styled.div<{ HeaderHeight: number }>`
  width: 100%;
  padding: ${(props) => props.HeaderHeight + "px 0 0"};
`;
