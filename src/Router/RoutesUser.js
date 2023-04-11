import Surats from "../pages/user/Administrasi/Surats";
import AnggotaBaru from "../pages/user/AnggotaBaru";
import GalleryFoto from "../pages/user/Gallery/GalleryFoto";
import GalleryInfografis from "../pages/user/Gallery/GalleryInfografis";
import GalleryTwibbone from "../pages/user/Gallery/GalleryTwibbone";
import GalleryVideo from "../pages/user/Gallery/GalleryVideo";
import Home from "../pages/user/Home";
import Artikel from "../pages/user/Publikasi/Artikel";
import Buku from "../pages/user/Publikasi/Buku";
import DArtikel from "../pages/user/Publikasi/DArtikel";
import Jurnal from "../pages/user/Publikasi/Jurnal";
import Sejarah from "../pages/user/Sejarah";
import FotoAlbum from "../pages/user/Gallery/FotoAlbum";
import VideoAlbum from "../pages/user/Gallery/VideoAlbum";

export const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/sejarah',
        component: Sejarah,
    },
    {
        path: '/anggotaBaru',
        component: AnggotaBaru,
    },
    {
        path: '/twibbone',
        component: GalleryTwibbone,
    },
    {
        path: "/video",
        component: VideoAlbum,
    },
    {
        path: '/albumvideo/:id',
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
        path: "/surat",
        component: Surats,
    }
]