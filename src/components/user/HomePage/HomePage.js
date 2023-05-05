import React from "react";
import SliderPage from "./SliderPage/SliderPage";
import HelpdeskPage from "../HelpdeskPage/HelpdeskPage";
import Artikel from "./PArtikel";
import SejarahOrganisasi from '../HomePage/SejarahOrganisasi/SejarahOrganisasi'
import Publikasi from "../Publikasi";
import Galeri from "../Galeri";
import Foto from "../GalleryPage/Foto"
import Infografis from "../GalleryPage/Infografis"
import Jurnal from "../ELibraryPage/PublikasiJurnal"
import Buku from "../ELibraryPage/PublikasiBuku"
import Opini from "../ELibraryPage/PublikasiOpini"

const HomePage = () => {
  return (
    <>
      <SliderPage />
      <Artikel />
      <SejarahOrganisasi/>
      {/* <Galeri/> */}
      <Foto/>
      <Infografis/>
      <Jurnal/>
      <Buku/>
      <Opini/>
      <HelpdeskPage />
    </>
  );
};

export default HomePage;
