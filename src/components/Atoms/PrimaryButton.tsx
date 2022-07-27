import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, zIndex } from "../../styles";

type Props = {
  label: string;
  onClick: () => void;
};

const PrimaryButton: React.VFC<Props> = ({ label, onClick }) => (
  <Container onClick={onClick}>{label}</Container>
);

export default PrimaryButton;

const Container = styled.button`
  cursor: pointer;
  padding: 7.5px 16px;
  ${font.subtitle2};
  color: ${color.background.white};
  background-color: ${color.content.black};
  border-radius: 8px;
`;
