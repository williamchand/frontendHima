import AnggotaBaru from "../pages/user/AnggotaBaru";
import GalleryFoto from "../pages/user/Gallery/GalleryFoto";
import GalleryInfografis from "../pages/user/Gallery/GalleryInfografis";
import GalleryTwibbone from "../pages/user/Gallery/GalleryTwibbone";
import GalleryVideo from "../pages/user/Gallery/GalleryVideo";
import Home from "../pages/user/Home";
import Artikel from "../pages/user/Publikasi/Artikel";
import Opini from "../pages/user/Publikasi/Opini";
import Buku from "../pages/user/Publikasi/Buku";
import DArtikel from "../pages/user/Publikasi/DArtikel";
import Jurnal from "../pages/user/Publikasi/Jurnal";
import Sejarah from "../pages/user/Sejarah";
import FotoAlbum from "../pages/user/Gallery/FotoAlbum";
import VideoAlbum from "../pages/user/Gallery/VideoAlbum";
import DOpini from "../pages/user/Publikasi/DOpini";
import Foto from "../components/user/HomePage/foto"
// import Publication from "../components/user/HomePage/publicationCollection";
import PublikasiPage from "../pages/user/Publikasi/PublikasiPage";
import Infografis from "../components/user/GalleryPage/Infografis";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sejarah",
    component: Sejarah,
  },
  {
    path: "/anggotaBaru",
    component: AnggotaBaru,
  },
  {
    path: "/twibbone",
    component: GalleryTwibbone,
  },
  {
    path: "/video",
    component: VideoAlbum,
  },
  {
    path: "/albumvideo/:id",
    component: GalleryVideo,
  },
  {
    path: "/foto",
    component: FotoAlbum,
  },
  {
    path: "/albumfoto/:id",
    component: GalleryFoto,
  },
  {
    path: "/infografis",
    component: GalleryInfografis,
  },
  {
    path: "/buku",
    component: Buku,
  },
  {
    path: "/jurnal",
    component: Jurnal,
  },
  {
    path: "/berita",
    component: Artikel,
  },
  {
    path: "/berita/:id/:judul",
    component: DArtikel,
  },
  {
    path: "/opini",
    component: Opini,
  },
  {
    path: "/opini/:id/:judul",
    component: DOpini,
  },
  {
    path: "/fotoo",
    component: Foto
  },
  {
    path: "/publicationn",
    component: PublikasiPage
  },
  {
    path: "/inpografis",
    component: Infografis
  },
  //   ,
  //   {
  //     path: "/surat",
  //     component: Surats,
  //   },
];
