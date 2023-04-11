import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { SPage } from "./styles";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SPage>{children}</SPage>
      <Footer />
    </>
  );
};

export default Layout;
