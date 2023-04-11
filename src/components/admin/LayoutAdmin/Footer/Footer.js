import React from "react";
import Logo from "../../../../images/logoHimaPersis.png";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="container is-fullhd">
        <div
          className="footer has-text-white"
          style={{ background: `rgba(173,47,29,0.6)` }}
        >
          <div className="columns is-variable is-gapless p-5">
            <div className="column is-one-fifth">
              <figure className="image mt-3">
                <img src={Logo} alt="logo" />
              </figure>
              <p>Jalan </p>
              <p>Telp </p>
              <p>Email </p>
            </div>
            <div className="column" />
            <div className="column" />
            <div className="column" />
            <div className="column">
              <div className="title is-size-5 has-text-white mt-2 mb-0 ">
                GALLERY
              </div>
              <div>
                <Link to={"/adminFoto"} className="subtitle is-size-6 mb-1 has-text-white">
                  Foto
                </Link>
              </div>
              <div>
                <Link to={"/adminVideo"} className="subtitle is-size-6 mb-1 has-text-white">
                  Video
                </Link>
              </div>
              <div>
                <Link to={"/adminTwibbone"} className="subtitle is-size-6 mb-1 has-text-white">
                  Twibbone
                </Link>
              </div>
              <div>
                <Link to={"/adminInfografis"} className="subtitle is-size-6 has-text-white">
                  Infografis
                </Link>
              </div>
            </div>
            <div className="column">
              <p className="title is-size-5 has-text-white mt-2 mb-0">
                E-LIBRARY
              </p>
              <p>
                <Link to={"/adminBuku"} className="subtitle is-size-6 has-text-white">
                  Publikasi Buku
                </Link>
              </p>
              <p>
                <Link to={"/adminArtikel"} className="subtitle is-size-6 has-text-white">
                  Publikasi Artikel
                </Link>
              </p>
              <p>
                <Link to={"/adminJurnal"} className="subtitle is-size-6 has-text-white">
                  Publikasi Jurnal
                </Link>
              </p>
            </div>
          </div>
          <div className="has-text-centered">
            <span
              className="icon is-large has-text-warning m-5"
              style={{ fontSize: 90 }}
            >
              <BsInstagram />
            </span>
            <span
              className="icon is-large has-text-info m-5"
              style={{ fontSize: 90 }}
            >
              <AiOutlineTwitter />
            </span>
            <span
              className="icon is-large has-text-danger m-5"
              style={{ fontSize: 90 }}
            >
              <AiOutlineYoutube />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
