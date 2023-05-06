import React from "react";
// import Footer from "./Footer/Footer";
// import Header from "./Header/Header";
// import Sidebar from "./Sidebar";
// import { SPage } from "./styles";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import styled from "styled-components";
import "./styles.css"

const Layout = ({ children }) => {
  const Section = styled.section`
  // height: 100vh;
  transition: all .5s;
  margin-left: 250px;
`;
  return (
    <div>
    <input type="checkbox" id="check"/>
      <div className="sidebar">
      <header>My App</header>
    <ul>
      <li><a href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
      <li><a href="#"><i className="fas fa-link"></i>Shortcuts</a></li>
      <li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
      <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
    </ul>
  </div>
 <section>
  <label for="check" style={{position:'fixed'}}>
    <i id="btn"><GiHamburgerMenu/></i>
    <i id="cancel"> <AiFillCloseCircle/> </i>
  </label>
  {children}
  {/* anjeeeeeeeeeengggggggggggggggggggggggg */}
 </section>
    </div>
  );
};

export default Layout;
