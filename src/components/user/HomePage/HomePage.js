import React, { useEffect, useState } from "react";
import SliderPage from "./SliderPage/SliderPage";
import HelpdeskPage from "../HelpdeskPage/HelpdeskPage";
import Artikel from "./PArtikel";
import SejarahOrganisasi from "../HomePage/SejarahOrganisasi/SejarahOrganisasi";
import Foto from "../HomePage/foto";
import Publication from "./publicationCollection";
import Inpografis from "./inpografis";
import Youtube from "./youtube";
import axios from "axios";

const HomePage = ({ sejarah, beranda, foto, infografis, video, publikasi }) => {
  const [photo, setPhoto] = useState("");
  const [infograph, setInfograph] = useState("");

  const getPhoto = async () => {
    const photos = await axios.get("https://server.himapersis.id/foto");
    setPhoto(photos.data);
  };

  const getInfografis = async () => {
    const infograph = await axios.get(
      "https://server.himapersis.id/infografis"
    );
    setInfograph(infograph.data);
  };

  useEffect(() => {
    getInfografis();
    getPhoto();
  }, []);
  // console.log(infograph);
  return (
    <>
      <span ref={beranda}></span>
      <SliderPage />
      <div className="px-6">
        <Artikel />
        <span ref={sejarah}></span>
        <SejarahOrganisasi />
        <span ref={foto}></span>
        <Foto photo={photo} />
        <span ref={video}></span>
        <Youtube />
        <span ref={infografis}></span>
        <Inpografis infografis={infograph} />
        <span ref={publikasi}></span>
        <Publication />
        <HelpdeskPage />
      </div>
    </>
  );
};

export default HomePage;
