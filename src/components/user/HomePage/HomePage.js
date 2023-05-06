import React from "react";
import SliderPage from "./SliderPage/SliderPage";
import HelpdeskPage from "../HelpdeskPage/HelpdeskPage";
import Artikel from "./PArtikel";
import SejarahOrganisasi from '../HomePage/SejarahOrganisasi/SejarahOrganisasi'
import Publikasi from "../Publikasi";
import Galeri from "../Galeri";
import Foto from "../HomePage/foto"
import Infografis from "../GalleryPage/Infografis"
import Jurnal from "../ELibraryPage/PublikasiJurnal"
import Buku from "../ELibraryPage/PublikasiBuku"
import Opini from "../ELibraryPage/PublikasiOpini"
import Publication from "./publicationCollection";
import Inpografis from "./inpografis";

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

const HomePage = () => {
  return (
    <>
    <div className="px-6">
      <SliderPage />
      <Artikel />
      <SejarahOrganisasi/>
      <Foto photo={photo}/>
      <Inpografis/>
      <Publication/>
      <HelpdeskPage />
    </div>
    </>
  );
};

export default HomePage;
