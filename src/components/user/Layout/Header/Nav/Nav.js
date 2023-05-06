import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Dropdown from "./Dropdown/Dropdown";
import {
  Btn,
  SArrowContainer,
  SArrowIcon,
  SNav,
  SNavLabel,
  SNavLabelContainer,
  SNavLink,
  SNavLinkContainer,
} from "./styles";

const Butt = styled.button`
  background: black;
  color: white;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateX(10px);
  }
`;

const Nav = ({ navLinks, menuToggleHandler }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const openDropdownHandler = (label) => {
    if (label === openDropdown) return setOpenDropdown(null);
    setOpenDropdown(label);
  };

  const onSelectCallback = () => {
    if (menuToggleHandler) menuToggleHandler();
    setOpenDropdown(null);
  };

  return (
    <SNav className="mt-4">
      {/* anjayuyyyyyyyyyyyyyyyyyyyhbhjvhvhjgasndasjkd */}
      {navLinks.map(({ label, link, tree }, index) => {
        const isOpen = openDropdown === label;
        return (
          <SNavLinkContainer key={index} >
            {link && (
              <SNavLink to={link} onClick={onSelectCallback}>
                {label[0].toUpperCase()+label.slice(1)}
              </SNavLink>
            )}
          </SNavLinkContainer>
        );
      })}
      <div className="mt-auto">
        <Link to="/anggotabaru">
        <Butt
          className="button mt-5"
          style={{borderRadius:'0px'}}
          onClick={onSelectCallback}
        >
          Gabung HimaPersis
        </Butt>
        </Link>
      </div>
    </SNav>
  );
};

Nav.defaultProps = {
  navLinks: [
    {
      label: "beranda",
      link: "/",
      tree: null,
    },
    {
      label: "sejarah",
      link: "/sejarah",
      tree: null,
    },
    {
      label: "foto",
      link: "/foto",
      tree: null,
    },
    {
      label: "video",
      link: "/video",
      tree: null,
    },
    {
      label: "infografis",
      link: "/infografis",
      branches: null,
    },
    {
      label: "publikasi",
      link: "/publicationn",
      tree: null
    },
  ],
};
export default Nav;
