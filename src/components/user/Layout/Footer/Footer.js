import React from "react";
import Logo from "../../../../images/logoHimaPersis.png";
import { Link } from "react-router-dom";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Youtube from '../../../../images/YouTube-Icon-Full-Color-Logo.wine.png';
import Tiktok from '../../../../images/Social-media_Tiktok-512.webp';
import Facebook from '../../../../images/circle-facebook_-512.webp';
import Twitter from '../../../../images/free-twitter-logo-icon-2429-thumb.png';
import Instagram from '../../../../images/instagram-1581266_640-transformed.png'

const Footer = () => {
  const ig = "instagram.com/pphimapersis.official";
  const fb = "www.facebook.com/himapersisID/";
  const yt = "youtube.com/channel/UCbPOziblvvcffpbO5z1uqVQ";
  const tw = "twitter.com/himapersis/";
  const tt = "tiktok.com/@pphimapersis.official"

  // const tiktok = '../../../../images/Social-media_Tiktok-512.webp';
  return (
    <>
      <div className="container is-fullhd">
        <div
          className="has-text-white"
          style={{ background: `rgba(173,47,29,0.6)` }}
        >
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                  <figure className="image is-128x128-mobile">
                    <img src={Logo} alt="logo" style={{ width: "100%" }} />
                  </figure>
                </div>
              </div>
              <div className="columns is-mobile has-text-centered">
                <div className="column"></div>
                <div className="column"></div>
                <div className="column m-1 p-1" style={{ backgroundColor: `rgba(255,255,255,0.1)` }}>
                  <Link
                    to={{ pathname: `https://${ig}` }}
                    className="icon is-medium m-1"
                    target="_blank"
                  >
                    <img src={Instagram} alt="instagram" />
                  </Link>
                </div>
                <div className="column p-1 m-1" style={{ backgroundColor: `rgba(255,255,255,0.1)` }}>
                  <Link
                    to={{ pathname: `https://${tw}` }}
                    className="icon is-medium m-1"
                    target="_blank"
                  >
                    <img src={Twitter} alt="twitter" />
                  </Link>
                </div>
                <div className="column p-1 m-1" style={{ backgroundColor: `rgba(255,255,255,0.1)` }}>
                  <Link
                    to={{ pathname: `https://${yt}` }}
                    className="icon is-medium m-1"
                    target="_blank"
                  >
                    <img src={Youtube} alt="youtube" />
                  </Link>
                </div>
                <div className="column p-1 m-1" style={{ backgroundColor: `rgba(255,255,255,0.1)` }}>
                  <Link
                    to={{ pathname: `https://${fb}` }}
                    className="icon is-medium m-1"
                    target="_blank"
                  >
                    <img alt="facebook" src={Facebook} />
                  </Link>
                </div>
                <div className="column p-1 m-1" style={{ backgroundColor: `rgba(255,255,255,0.1)` }}>
                  <Link
                    to={{ pathname: `https://${tt}` }}
                    className="icon is-medium m-1"
                    target="_blank"
                  >
                    <img src={Tiktok} alt="tiktok" />
                  </Link>
                </div>
                <div className="column"></div>
                <div className="column"></div>
              </div>
              <div className="columns is-mobile has-text-white m-0">
                <div className="column ">
                  <p>Alamat</p>
                </div>
                <div className="column  is-full">
                  <p>: Jl. Bambu Apus 1 No 1 Cipayung Jakarta Timur DKI Jakarta 10560 </p>
                </div>
              </div>
              <div className="columns is-mobile has-text-white m-0">
                <div className="column ">
                  <p>Email</p>
                </div>
                <div className="column  is-full">
                  <p>: pphimapersis.official@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column is-one-fifth m-1">
                  <div>
                    <Link to="/sejarah" className="has-text-white">
                      SEJARAH
                    </Link>
                  </div>
                </div>
                <div className="column m-1">
                  <div className="has-text-white">GALLERY</div>
                  <div>
                    <Link to={"/foto"} className="has-text-white">
                      Foto
                    </Link>
                  </div>
                  <div>
                    <Link to={"/video"} className="has-text-white">
                      Video
                    </Link>
                  </div>
                  <div>
                    <Link to={"/twibbone"} className="has-text-white">
                      Twibbone
                    </Link>
                  </div>
                  <div>
                    <Link to={"/infografis"} className="has-text-white">
                      Infografis
                    </Link>
                  </div>
                </div>
                <div className="column m-1">
                  <p className="has-text-white">E-LIBRARY</p>
                  <p>
                    <Link to={"/buku"} className="has-text-white">
                      Publikasi Buku
                    </Link>
                  </p>
                  <p>
                    <Link to={"/artikel"} className="has-text-white">
                      Publikasi Artikel
                    </Link>
                  </p>
                  <p>
                    <Link to={"/jurnal"} className="has-text-white">
                      Publikasi Jurnal
                    </Link>
                  </p>
                </div>
                <div className="column m-1">
                  <div className="has-text-white">
                    ADMINISTRASI
                    <div>
                      <Link to="/sejarah" className="  has-text-white">
                        Surat
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ background: `rgba(173,47,29,1)`, height: "30px" }}
            className="p-1"
          >
            <div className="has-text-white is-flex is-justify-content-center">
              <AiOutlineCopyrightCircle className="mt-1 mr-1" />
              {new Date().getFullYear()}
              <p className="is-capitalized ml-2">pimpinan pusat hima persis.</p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Footer;
