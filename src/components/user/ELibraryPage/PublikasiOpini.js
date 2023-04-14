import axios from "axios";
import React from "react";
import { useState } from "react";
import { API_URL } from "../../../utils";
import { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import DetailOpini from "./DetailOpini";
import Opini from "./Opini";

const PublikasiOpini = () => {
  let { path } = useRouteMatch();
  const [opinis, setOpini] = useState([]);

  useEffect(() => {
    getOpini();
  }, []);

  const getOpini = async () => {
    const response = await axios.get(API_URL + "/opini");
    setOpini(response.data);
  };
  return (
    <div className="container">
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Publikasi Opini</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-multiline is-desktop mt-5 mb-5">
        <Route path={`${path}/:id/:judul`}>
          <DetailOpini />
        </Route>
        <Opini data={opinis} />
      </div>
    </div>
  );
};

export default PublikasiOpini;
