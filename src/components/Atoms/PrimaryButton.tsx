import styled from "@emotion/styled";
import Link from "next/link";
import { color, curve, font, media, zIndex } from "../../styles";

type Props = {
  label: string;
  onClick: () => void;
  color?: string;
};

const PrimaryButton: React.VFC<Props> = ({ label, onClick, color }) => (
  <Container onClick={onClick} color={color}>{label}</Container>
);

export default PrimaryButton;

const Container = styled.button<{color:string|undefined}>`
  cursor: pointer;
  padding: 7.5px 16px;
  width:160px;
  ${font.subtitle2};
  color: ${color.background.white};
  background-color: ${(props) => props.color ? props.color:color.content.black};
  border-radius: 8px;
  border:0px;
  filter:brightness(1);
  ${curve.button};
  &:hover{
    filter:brightness(0.9);
  }
  ${media.mdsp`
    width:120px;
    ${font.label};
  `}
`;
