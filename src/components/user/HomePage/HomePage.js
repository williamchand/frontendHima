import React from "react";
import SliderPage from "./SliderPage/SliderPage";
import HelpdeskPage from "../HelpdeskPage/HelpdeskPage";
import Artikel from "./PArtikel";

const HomePage = () => {
  return (
    <>
      <SliderPage />
      <Artikel />
      <HelpdeskPage />
    </>
  );
};

export default HomePage;
