import React, {useState,useEffect} from "react";
import Footer from "./Footer/Footer";
// import Header from "./Header/Header";
// import Sidebar from "./Sidebar";
// import { SPage } from "./styles";
import { HiDotsVertical } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import Logo from '../../../images/logoHimaPersis.png';
import "./styles.css"
import axios from "axios";
import { API_URL } from "../../../utils";
import Artikel from '../HomePage/PArtikel'

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(true);
  const [artikel, setArtikel] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  const getArtikel = async () => {
    try {
      const response = await axios.get(API_URL + `/artikel?search=${keyword}`);
      setArtikel(response.data);
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };

  useEffect(() => {
    getArtikel();
  }, [keyword]);

  const handleModal = () => {
    setModal((value) => !value);
  };

  const search = (e) => {
    e.preventDefault();
    setKeyword(query);
    setQuery("");
  };

  const data = [
    {
      label: "beranda",
      link: "/",
      tree: null,
    },
    {
      label: "sejarah",
      link: "/sejarah",
      tree: null,
    },
    {
      label: "foto",
      link: "/foto",
      tree: null,
    },
    {
      label: "video",
      link: "/video",
      tree: null,
    },
    {
      label: "infografis",
      link: "/infografis",
      branches: null,
    },
    {
      label: "publikasi",
      link: "/publicationn",
      tree: null
    }
  ]

  return (
    <div>
    <input type="checkbox" id="check"/>
      <div className="sidebar">
      <header>
        <img src={Logo}></img>
      </header>
      <div>
      <form onSubmit={search} className="mb-3">
        <div className="field has-addons is-flex mx-auto has-background-light" style={{width:'190px'}}>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Cari Disini ..."
              style={{ boxShadow:'none',border:'none',background:'none' }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="control">
            <button
              className="button"
              type="submit"
              style={{border:'none'}}
              onClick={() => handleModal()}
            >
              <BiSearchAlt />
            </button>
          </div>
        </div>
      </form>
      </div>
    <ul>
      {
        data.map(({label,link,className},index)=>(
          <li><Link to={link}>{label[0].toUpperCase()+label.slice(1)}</Link></li>
        ))
      }
    </ul>
      <Link to="/anggotabaru" className="button is-black is-flex mt-4 mx-auto" style={{borderRadius:'0px',width:'190px'}}>Gabung Hima</Link>
  </div>
  <label for="check" style={{position:'fixed',zIndex:1,top:'20px'}}>
    <i id="cancel"> <HiDotsVertical/> </i>
  </label>
 <section>
 <div
        className={`modal ${modal ? "" : "is-active"}`}
        onClick={() => handleModal()}
      >
        <div className="modal-background"></div>
        <div className="box">
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Hasil Pencarian ...</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <div className="modal-card-body">
            {msg ? (
              <h1 className="notification is-danger is-light">{msg}</h1>
            ) : (
              <Artikel data={artikel} />
            )}
          </div>
        </div>
        </div>
      </div>
  {children}
  <Footer/>
 </section>
    </div>
  );
};

export default Layout;
