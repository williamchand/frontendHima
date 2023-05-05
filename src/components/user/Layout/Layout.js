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
        <div className="column is-one-quarter" style={{}}>
          <div className="box sidebar" style={{
            // position:'fixed',
            top:0,
            bottom:0
            // width:'300px'
          }}>
            <Header />
          </div>
        </div>  
        <div className="column" style={{
          overflow:'auto'
        }}>
          <div className="">{children}</div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Layout;
