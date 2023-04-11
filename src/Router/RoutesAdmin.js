import Login from "../pages/admin/Login";
import RegisterAdmin from "../pages/admin/RegisterAdmin";
import Anggota from '../pages/admin/anggota/anggotaAdmin';
import Foto from "../pages/admin/Gallery/Foto/Foto";
import Infografis from "../pages/admin/Gallery/Infografis/Infografis";
import Video from "../pages/admin/Gallery/Video/Video";
import Twibbone from "../pages/admin/Gallery/Twibbone/Twibbone";
import Artikel from "../pages/admin/Publikasi/Artikel/Artikel";
import Jurnal from "../pages/admin/Publikasi/Jurnal/Jurnal";
import Buku from "../pages/admin/Publikasi/Buku/Buku";
import kader from "../pages/admin/administrasi/Kader/kader";
import alumni from "../pages/admin/administrasi/Alumni/alumni";
import surat from "../pages/admin/administrasi/Surat/surat";
import Home from "../pages/admin/Home";
import CreateFoto from "../pages/admin/Gallery/Foto/CreateFoto";
import CreateTwibbone from "../pages/admin/Gallery/Twibbone/CreateTwibbone";
import CreateInfografis from "../pages/admin/Gallery/Infografis/CreateInfografis";
import CreateVideo from "../pages/admin/Gallery/Video/CreateVideo";
import CreateArtikel from "../pages/admin/Publikasi/Artikel/CreateArtikel";
import EditArtikel from "../pages/admin/Publikasi/Artikel/EditArtikel";
import CreateBuku from "../pages/admin/Publikasi/Buku/CreateBuku";
import CreateJurnal from "../pages/admin/Publikasi/Jurnal/CreateJurnal";
import Add from "../pages/admin/administrasi/Surat/Add";
import add from '../pages/admin/administrasi/Alumni/add';
import edit from '../pages/admin/administrasi/Alumni/edit';
import addKader from '../pages/admin/administrasi/Kader/addKader';
import editKader from '../pages/admin/administrasi/Kader/editKader';
import FotoAlbum from "../pages/admin/Gallery/Foto/FotoAlbum";
import CreateAlbum from "../pages/admin/Gallery/Foto/CreateAlbum";
import VideoAlbum from "../pages/admin/Gallery/Video/VideoAlbum";
import CreateAlbumVideo from "../pages/admin/Gallery/Video/CreateAlbum";

export const routesAdmin = [
    {
        path: "/dashboard",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: RegisterAdmin,
    },
    {
        path: "/adminAnggota",
        component: Anggota,
    },
    {
        path: "/adminAlbum",
        component: FotoAlbum,
    },
    {
        path: "/addAlbum",
        component: CreateAlbum,
    },
    {
        path: "/adminFoto/:id",
        component: Foto,
    },
    {
        path: "/addFoto/:id",
        component: CreateFoto
    },
    {
        path: "/adminInfografis",
        component: Infografis
    },
    {
        path: "/addInfografis",
        component: CreateInfografis
    },
    {
        path: "/adminAlbumVideo",
        component: VideoAlbum,
    },
    {
        path: "/addAlbumVideo",
        component: CreateAlbumVideo,
    },
    {
        path: "/adminVideo/:id",
        component: Video,
    },
    {
        path: "/addVideo/:id",
        component: CreateVideo,
    },
    {
        path: "/adminTwibbone",
        component: Twibbone,
    },
    {
        path: "/addTwibbone",
        component: CreateTwibbone,
    },
    {
        path: "/adminArtikel",
        component: Artikel,
    },
    {
        path: "/addArtikel",
        component: CreateArtikel,
    },
    {
        path: "/editArtikel/:id",
        component: EditArtikel,
    },
    {
        path: "/adminJurnal",
        component: Jurnal,
    },
    {
        path: "/addJurnal",
        component: CreateJurnal,
    },
    {
        path: "/adminBuku",
        component: Buku,
    },
    {
        path: "/addBook",
        component: CreateBuku,
    },
    {
        path: "/adminKader",
        component: kader,
    },
    {
        path: "/addKader",
        component: addKader,
    },
    {
        path: "/editKader/:id",
        component: editKader,
    },
    {
        path: "/adminAlumni",
        component: alumni,
    },
    {
        path: "/addAlumni",
        component: add,
    },
    {
        path: "/editAlumni/:id",
        component: edit,
    },
    {
        path: "/adminSurat",
        component: surat,
    },
    {
        path: "/addSurat",
        component: Add,
    }
]