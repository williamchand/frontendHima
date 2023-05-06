import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Infografis = () => {
  const [infografiss, setInfografiss] = useState([]);

  useEffect(() => {
    getInfografiss();
  }, []);

  const getInfografiss = async () => {
    const response = await axios.get(API_URL + "/infografis");
    setInfografiss(response.data);
  };


  return (
    <div className="container">
      <div className="has-text-centered mt-3">
        <h2 className="is-size-3">Infografis</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-desktop is-multiline m-5">
        {infografiss.map((infografis) => (
          <div className="column is-one-quarter" key={infografis.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={infografis.url} alt="image" />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="is-flex is-justify-content-start ">
        <Link to="/infografis" className="button is-black px-5 is-justify-content-end" style={{
          borderRadius: '0px'
        }}>Lihat Lainnya</Link>
      </div>
    </div>
  );
};

export default Infografis;
