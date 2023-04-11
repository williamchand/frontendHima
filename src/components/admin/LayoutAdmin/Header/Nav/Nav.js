import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import {
  SArrowContainer,
  SArrowIcon,
  SNav,
  SNavBtn,
  SNavLabel,
  SNavLabelContainer,
  SNavLink,
  SNavLinkContainer,
} from "./styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../../../utils";

const Nav = ({ navLinks, menuToggleHandler }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const history = useHistory();

  const openDropdownHandler = (label) => {
    if (label === openDropdown) return setOpenDropdown(null);
    setOpenDropdown(label);
  };

  const onSelectCallback = () => {
    if (menuToggleHandler) menuToggleHandler();
    setOpenDropdown(null);
  };

  const Logout = async () => {
    try {
      await axios.delete(API_URL + "/logout");
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
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
      <SNavBtn onClick={Logout}>
        LOGOUT
      </SNavBtn>
    </SNav>
  );
};

Nav.defaultProps = {
  navLinks: [
    {
      label: "dashboard",
      link: "/dashboard",
      tree: null,
    },
    {
      label: "dokumentasi",
      link: null,
      tree: [
        {
          label: "foto",
          link: "/adminAlbum",
          branches: null,
        },
        {
          label: "video",
          link: "/adminAlbumVideo",
          branches: null,
        },
        {
          label: "infografis",
          link: "/adminInfografis",
          branches: null,
        },
        {
          label: "twibbone",
          link: "/adminTwibbone",
          branches: null,
        },
      ],
    },
    {
      label: "publiser",
      link: null,
      tree: [
        {
          label: "buku",
          link: "/adminBuku",
          branches: null,
        },
        {
          label: "jurnal",
          link: "/adminJurnal",
          branches: null,
        },
        {
          label: "artikel",
          link: "/adminArtikel",
          branches: null,
        },
      ],
    },
    {
      label: "administrasi",
      link: null,
      tree: [
        {
          label: "surat internal",
          link: "/adminSurat",
          branches: null,
        },
        {
          label: "anggota baru",
          link: "/adminAnggota",
          branches: null,
        },
        {
          label: "database kader",
          link: "/adminKader",
          branches: null,
        },
        {
          label: "database alumni",
          link: "/adminAlumni",
          branches: null,
        },
      ],
    },
  ],
};
export default Nav;
