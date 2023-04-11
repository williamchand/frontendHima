import React, { useState } from "react";
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
import { API_URL } from "../../../../../utils";

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
    <SNav>
      {navLinks.map(({ label, link, tree }, index) => {
        const isOpen = openDropdown === label;
        return (
          <SNavLinkContainer key={index}>
            {link && (
              <SNavLink to={link} onClick={onSelectCallback}>
                {label}
              </SNavLink>
            )}
            {!link && (
              <SNavLabelContainer onClick={() => openDropdownHandler(label)}>
                <SNavLabel isOpen={isOpen}>{label}</SNavLabel>
                <SArrowContainer isOpen={isOpen}>
                  <SArrowIcon />
                </SArrowContainer>
              </SNavLabelContainer>
            )}
            {isOpen && (
              <Dropdown tree={tree} onSelectCallback={onSelectCallback} />
            )}
          </SNavLinkContainer>
        );
      })}
      <Btn className="button is-success is-rounded is-outlined" to="/anggotaBaru" onClick={onSelectCallback}>Gabung HimaPersis</Btn>
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
      label: "galleri",
      link: null,
      tree: [
        {
          label: "dokumentasi organisasi",
          link: null,
          branches: [
            {
              label: "foto",
              link: "/foto",
              branches: null,
            },
            {
              label: "video",
              link: "/video",
              branches: null,
            },
          ],
        },
        // {
        //   label: "twibbone",
        //   link: "/twibbone",
        //   branches: null,
        // },
        {
          label: "infografis",
          link: "/infografis",
          branches: null,
        },
      ],
    },
    {
      label: "publikasi",
      link: null,
      tree: [
        {
          label: "publikasi buku",
          link: "/buku",
          branches: null,
        },
        {
          label: "publikasi jurnal",
          link: "/jurnal",
          branches: null,
        },
        {
          label: "publikasi berita",
          link: "/berita",
          branches: null,
        },
      ],
    },
    {
      label: "administrasi",
      link: null,
      tree: [
        {
          label: "surat",
          link: "/surat",
          branches: null
        }
      ]
    }
  ],
};
export default Nav;
