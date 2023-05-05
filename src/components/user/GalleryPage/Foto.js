import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { Link, useParams } from "react-router-dom";

const Foto = () => {
  const [fotos, setFotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFotos();
  }, []);

  const getFotos = async () => {
    const response = await axios.get(API_URL + "/albumfoto/all" + `/${id}`);
    setFotos(response.data);
  };
  return (
    <div className="p-6">
      <div
        className="has-text-left"
        style={{ borderLeft: "6px solid red" }}
      >
        <p className="is-size-6 pl-2 has-text-weight-bold">
          Dokumentasi Foto
        </p>
      </div>
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Dokumentasi Foto</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-desktop is-multiline m-5">
        {fotos.map((foto) => (
          <div className="column is-one-quarter" key={foto.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={foto.Foto.url} alt="image" />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-3 pl-5">
        <Link to="/foto" className="button" style={{ background: "rgb(252,206,22)" }}>
          Cek Album Lain
        </Link>
      </div>
    </div>
  );
};

export default Foto;
