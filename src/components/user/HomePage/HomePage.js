import React from "react";
import SliderPage from "./SliderPage/SliderPage";
import HelpdeskPage from "../HelpdeskPage/HelpdeskPage";
import Artikel from "./PArtikel";
import SejarahOrganisasi from '../HomePage/SejarahOrganisasi/SejarahOrganisasi'
import Foto from "../HomePage/foto"
import Publication from "./publicationCollection";
import Inpografis from "./inpografis";
import Youtube from "./youtube";

const photo = [
  {
    id:1,
    url: 'https://picsum.photos/200/300'
  },
  {
    id:2,
    url: 'https://picsum.photos/200/300'
  },
  {
    id:3,
    url: 'https://picsum.photos/200/300'
  },
  {
    id:4,
    url: 'https://picsum.photos/200/300'
  }
]

const HomePage = ({sejarah,beranda,foto,infografis,video,publikasi}) => {
  return (
    <>
    <div className="px-6">
      <span ref={beranda}></span>
      <SliderPage />
      <Artikel />
      <span ref={sejarah}></span>
      <SejarahOrganisasi/>
      <span ref={foto}></span>
      <Foto photo={photo}/>
      <span ref={video}></span>
      <Youtube/>
      <span ref={infografis}></span>
      <Inpografis/>
      <span ref={publikasi}></span>
      <Publication/>
      <HelpdeskPage />
    </div>
    </>
  );
};

export default HomePage;
