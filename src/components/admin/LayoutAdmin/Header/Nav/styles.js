import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { v, b, a } from "../../../../../styles/variables";

export const SNav = styled.nav`
  width: auto;
  padding: ${v.mdSpacing};
  background: ${({ theme }) => theme.bg};
  border-radius: ${v.borderRadius};
  z-index: 999;
  @media ${b.md} {
    background: none;
    padding: 0;
    height: 100%;
    display: flex;
  }
`;

export const SNavLinkContainer = styled.div`
  user-select: none;
  position: relative;
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
export const SArrowIcon = styled(IoMdArrowDropdown)`
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

export const SNavBtn = styled(Link)`
  display: none;
  @media ${a.md} {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.primary};
    padding: auto;
    margin: 15rem auto;
    width: max-content;
    height: 50px;
    font-size: 2rem;
    text-decoration: none;
    text-transform: uppercase;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.bg};
    transition: ease-out 0.5s;
    color: ${({ theme }) => theme.text};
    outline: none;

    :hover {
      box-shadow: inset 300px 0 0 0 ${({ theme }) => theme.bg};
    }
  }
`;
