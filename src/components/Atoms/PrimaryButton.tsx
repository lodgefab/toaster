import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, zIndex } from "../../styles";

const PrimaryButton = ({
  label,
  onClick,
  ...otherProps
}: {
  label: string;
  onClick: () => void;
}) => <Container onClick={onClick}>{label}</Container>;

export default PrimaryButton;

const Container = styled.button`
  cursor: pointer;
  padding: 7.5px 16px;
  ${font.subtitle2};
  color: ${color.background.white};
  background-color: ${color.content.black};
  border-radius: 8px;
`;
