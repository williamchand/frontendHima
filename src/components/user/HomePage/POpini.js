import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch, Route } from "react-router-dom";
import { API_URL } from "../../../utils";
import DetailOpini from "../ELibraryPage/DetailOpini";
import Opini from "./Opini";

const POpini = () => {
  let { path } = useRouteMatch();
  const [opinis, setOpinis] = useState([]);

  useEffect(() => {
    getOpinis();
  }, []);

  const getOpinis = async () => {
    const response = await axios.get(API_URL + "/opini");
    setOpinis(response.data);
  };
  return (
    <div className="hero is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div
            className="has-text-left"
            style={{ borderLeft: "6px solid red" }}
          >
            <p className="is-size-6 pl-2 has-text-weight-bold">Opini Terbaru</p>
          </div>
          <div className="columns">
            <div className="column">
              <Route path={`${path}/:id/:judul`}>
                <DetailOpini />
              </Route>
              <Opini data={opinis} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POpini;
