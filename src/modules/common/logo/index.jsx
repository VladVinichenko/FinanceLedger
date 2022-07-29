import { sprite } from "../../../assets";
import styled from "styled-components";

export const Logo = () => {
  return (
    <LogoLink>
      <LogoSvg>
        <use href={`${sprite}#logo`}></use>
      </LogoSvg>
      <LogoText>
        Finance<LogoSpan>Ledger</LogoSpan>
      </LogoText>
    </LogoLink>
  );
};

const LogoLink = styled.a``;

const LogoSvg = styled.svg`
  width: 40px;
  height: 35px;
  fill: #28a745;
`;
const LogoText = styled.h1``;

const LogoSpan = styled.span``;
