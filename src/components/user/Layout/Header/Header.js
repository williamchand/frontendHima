import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../../app/slices/uiSlice";
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from "styled-components";

import Logo from "../../../../images/logoHimaPersis.png";
import Nav from "./Nav/Nav";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../../../../utils";
import Artikel from "../../HomePage/Artikel";

const Header = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);

  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(true);
  const [artikel, setArtikel] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getArtikel();
  }, [keyword]);

  const handleToggle = () => {
    setCollapsed((value) => !value);
  };

  const handleModal = () => {
    setModal((value) => !value);
  };

  const menuToggleHandler = () => {
    dispatch(uiActions.menuToggle());
  };

  const menuCloseHandler = () => {
    if (menuOpen) dispatch(uiActions.menuClose());
  };

  const getArtikel = async () => {
    try {
      const response = await axios.get(API_URL + `/artikel?search=${keyword}`);
      setArtikel(response.data);
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };

  const search = (e) => {
    e.preventDefault();
    setKeyword(query);
    setQuery("");
  };


const Sidebar = styled.div`
  position: fixed;
  left: 0px;
  width: 250px;
  height: 100%;
  background: #042331;
  transition: all .5s ease;

  header {
    font-size: 22px;
    color: white;
    line-height: 70px;
    text-align: center;
    background: #063146;
    user-select: none;
  }

  ul a {
    display: block;
    height: 100%;
    width: 100%;
    line-height: 65px;
    font-size: 20px;
    color: white;
    padding-left: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    border-top: 1px solid rgba(255,255,255,.1);
    transition: .4s;

    i {
      margin-right: 16px;
    }
  }

  ul li:hover a {
    padding-left: 50px;
  }
`;

const Check = styled.input.attrs({type: 'checkbox', id: 'check'})`
  display: none;

  &:checked ~ ${Sidebar} {
    left: -250px;
  }

  &:checked ~ label #btn {
    left: 40px;
    opacity: 1;
    pointer-events: auto;
  }

  &:checked ~ label #cancel {
    left: -195px;
  }

  &:checked ~ section {
    margin-left: 0px;
  }
`;

const LabelBtn = styled.label.attrs({htmlFor: 'check'})`
  // position: relative;
  background: #ffff;
  border-radius: 3px;
  cursor: pointer;

  #btn {
    left: 250px;
    top: 25px;
    font-size: 35px;
    color: white;
    padding: 6px 12px;
    opacity: 0;
    pointer-events: none;
    transition: all .5s;
  }

  #cancel {
    z-index: 1111;
    left: 195px;
    top: 17px;
    font-size: 30px;
    color: #0a5275;
    padding: 4px 9px;
    transition: all .5s ease;
  }
`;

  return (
    <div>
      <Check/>
      <LabelBtn>
        <i id="btn"> <AiFillCloseCircle/> </i>
        <i id="cancel"> <GiHamburgerMenu/> </i>
      </LabelBtn>
      <Sidebar>
        <header>My App</header>
        <ul>
          <li><a href="#"><i class="fas fa-qrcode"></i>Dashboard</a></li>
          <li><a href="#"><i class="fas fa-link"></i>Shortcuts</a></li>
          <li><a href="#"><i class="fas fa-stream"></i>Overview</a></li>
          <li><a href="#"><i class="fas fa-calendar-week"></i>Events</a></li>
          <li><a href="#"><i class="far fa-question-circle"></i>About</a></li>
          <li><a href="#"><i class="fas fa-sliders-h"></i>Services</a></li>
          <li><a href="#"><i class="far fa-envelope"></i>Contact</a></li>
        </ul>
      </Sidebar>
    </div>
  );
};

export default Header;
