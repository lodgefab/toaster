import { FunctionComponent } from "react";
import Link from "next/link";
import { BlogPost } from "../../../@types/schema";
import dayjs from "dayjs";
import styled from "@emotion/styled";
import { color, font } from "../../styles";

const Footer: FunctionComponent = () => {
  return (
    <Container>
      <Link href={`/`} passHref>
        <Logo />
      </Link>
      <Credit>
        Powered by{" "}
        <Link href={`/`} passHref>
          <span>Yahoo! LODGE</span>
        </Link>
      </Credit>
    </Container>
  );
};

export default Footer;

const Logo = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  background: url("/images/toaster.png");
  background-repeat: repeat-x;
  background-size: contain;
  box-sizing: border-box;
`;
const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Credit = styled.p`
  ${font.body2};
  color: ${color.content.dark};
  padding: 32px;
  span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
