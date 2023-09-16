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
  const [youtube, setYoutube] = useState("");

  const getPhoto = async () => {
    const photos = await axios.get("https://api.server.himapersis.id/foto");
    setPhoto(photos.data);
  };

  const getInfografis = async () => {
    const infograph = await axios.get(
      "https://api.server.himapersis.id/infografis"
    );
    setInfograph(infograph.data);
  };

  const getYoutube = async () => {
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbPOziblvvcffpbO5z1uqVQ&maxResults=3&order=date&key=AIzaSyAKc6NytX6fwAZZi2mFHM9uqXksmLHGQaA&type=video"
    );
    setYoutube(data.data.items);
  };

  useEffect(() => {
    getInfografis();
    getPhoto();
    getYoutube();
  }, []);
  // console.log(infograph);
  return (
    <>
      <span ref={beranda}></span>
      <SliderPage />
      <div className="px-2">
        <Artikel />
        <span ref={foto}></span>
        <Foto photo={photo} />
        <span ref={video}></span>
        <Youtube youtube={youtube} />
        <span ref={infografis}></span>
        <Inpografis infografis={infograph} />
        <span ref={publikasi}></span>
        <Publication />
        <span ref={sejarah}></span>
        <SejarahOrganisasi />
        <HelpdeskPage />
      </div>
    </>
  );
};

export default HomePage;
