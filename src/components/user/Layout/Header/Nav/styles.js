import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { v, b, a } from "../../../../../styles/variables";

export const SNav = styled.nav`
  width: 100%;
  padding: ${v.mdSpacing};
  // background: ${({ theme }) => theme.bg};
  border-radius: ${v.borderRadius};
  z-index: 999;
  background: none;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 978px) {
    display: block;
  }
`;

export const SNavLinkContainer = styled.div`
  user-select: none;
  // position: relative;
  margin-left: 10px;
  margin-top:30px;
  width: 100%;
  justify-content: space-between;

  :not(:last-of-type) {
    margin-bottom: ${v.mdSpacing};
  }

  @media ${b.md} {
    display: flex;
    align-items: center;
    :not(:last-of-type) {
      margin-bottom: 0;
      margin-right: ${v.mdSpacing};
    }
  }
`;

export const SNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SArrowContainer = styled.div`
  svg {
    color: ${({ isOpen, theme }) => (!isOpen ? "inherit" : theme.primary)};
    transform: ${({ isOpen }) => (!isOpen ? "rotate(-90deg)" : "none")};
  }
`;
export const SArrowIcon = styled(IoIosArrowDown)`
  display: block;
  margin-left: 4px;
`;

export const SNavLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const SNavLabel = styled.span`
  color: ${({ isOpen, theme }) => (!isOpen ? "inherit" : theme.primary)};
  text-transform: uppercase;
`;

export const Btn = styled(Link)`
  @media ${a.md}{
    position: absolute;
   color: red;
   bottom: 6rem;
   left: 50%;
   transform: translateX(-50%);
  }
`;