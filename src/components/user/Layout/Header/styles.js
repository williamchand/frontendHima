import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { v, b, a } from "../../../../styles/variables";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const btnReset = css`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  padding: 0;
`;

export const SHeaderHeight = styled.div`
  height: ${v.headerHeight};
`;

export const SHeaderFixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: ${v.headerHeight};
  background: ${({ theme }) => theme.primary2};
  z-index: 10;
`;

export const SHeader = styled.header`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease padding;
  padding: 0 ${v.mdSpacing};


  @media ${b.sm}{
    flex-direction: row;
  }

  > div {
    flex: 1;
  }
`;

export const Sleft = styled.div`
  position: absolute;
  @media ${b.sm}{
    position: initial;
  }
`;
export const SCenter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
/* 
  @media ${b.sm}{
    display: block;
  } */
`;

export const SRight = styled.div`
  display : flex ;
  justify-content: flex-end;
`;

export const SLogoLink = styled(Link)`
  width: 50vw;
  display: flex;

  @media ${b.sm} {
    width: 40vh;
    padding: 1rem;
  }
`;

export const SLogo = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  filter: contrast(200%);
`;

export const SCTAButton = styled.div`
  ${btnReset}
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media ${a.md} {
    display: none;
  }
  @media ${a.lg} {
    display: none;
  }
`;

export const SMenuToggleButton = styled.button`
  ${btnReset}
  width:32px;
  position: relative;
  display: none;
  @media ${a.md} {
    display: initial;
  }
  @media ${a.lg} {
    display: initial;
  }
`;

const iconStyles = css`
  display: block;
  width: 100%;
  height: 100%;
`;
export const SMenuIcon = styled(GiHamburgerMenu)`
  ${iconStyles}
`;
export const SCloseIcon = styled(IoMdClose)`
  ${iconStyles}
`;

export const SMenu = styled.div`
  position: fixed;
  top: ${v.headerHeight};
  left: 100%;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.bg};
  width: 80vw;
  height: calc(100% - ${v.headerHeight});
  transition: 0.3s ease right;

  @media ${b.md} {
    display: none;
  }
`;
