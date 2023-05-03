import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { SPage } from "./styles";

const Layout = ({ children }) => {
  return (
    <>
      <div className="columns" style={{
        height:'100vh',
        // width:'200vh'
      }}>
        <div className="column is-one-fifth-desktop">
          <Header />
        </div>  
        <div className="column " style={{
          overflowY:'auto'
        }}>
          <SPage>{children}</SPage>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Layout;
