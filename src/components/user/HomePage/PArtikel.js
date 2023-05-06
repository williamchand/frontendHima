import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { Route, useRouteMatch } from "react-router-dom";
import Artikel from "./Artikel";
import DetailArtikel from "../ELibraryPage/DetailArtikel";

const PArtikel = () => {
  let { path } = useRouteMatch();
  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    getArtikels();
  }, []);

  const getArtikels = async () => {
    const response = await axios.get(API_URL + `/artikel`);
    setArtikels(response.data);
  };
  
  return (
    <div>
    <div
      className="has-text-left mt-6"
      style={{ borderLeft: "6px solid red" }}
    >
      <p className="is-size-6 pl-2 has-text-weight-bold">
        Berita Terbaru
      </p>
    </div>
    <hr/>
    <div className="columns">
      <div className="column">
        <Route path={`${path}/:id/:judul`}>
          <DetailArtikel />
        </Route>
        <Artikel data={artikels} />
      </div>
    </div>
  </div>
  );
};

export default PArtikel;
