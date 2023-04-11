import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { Link, Route, useRouteMatch } from "react-router-dom";
import DetailArtikel from "./DetailArtikel";
import Artikel from "./Artikel";


const PublikasiArtikel = () => {
  let { path } = useRouteMatch();
  const [artikels, setArtikels] = useState([]);
  // const [judul, setJudul] = useState([]);

  useEffect(() => {
    getArtikels();
  }, []);

  const getArtikels = async () => {
    const response = await axios.get(API_URL + "/artikel");
    setArtikels(response.data);
  };
  return (
    <div className="container">
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Publikasi Berita</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-desktop is-multiline mt-5 mb-5">
        {/* {artikels.map((artikel) => (
          <div className="column is-one-quarter" key={artikel.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={artikel.url} alt="image" />
                </figure>
              </div>
              <div className="card-header">
                <a className="card-header-title">
                  <h6>{artikel.judul}</h6>
                </a>
              </div>
              <div className="card-footer">
                <div className="card-footer-item">
                  <Link
                    to={`artikel/${artikel.id}/${artikel.judul}`}
                    className="button is-info m-0"
                  >
                    <span>selengkapnya</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))} */}
        <Route path={`${path}/:id/:judul`}>
          <DetailArtikel />
        </Route>
        <Artikel data={artikels} />
      </div>
    </div >
  );
};

export default PublikasiArtikel;
