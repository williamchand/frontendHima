import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";
import { API_URL } from "../../../utils";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

const ArtikelPage = () => {
  const [name, setName] = useState("");
  const [artikels, setArtikel] = useState([]);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const history = useHistory();

  useEffect(() => {
    refreshToken();
    getArtikel();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(API_URL + "/token");
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        history.push("/login");
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(API_URL + "/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const getArtikel = async () => {
    const response = await axiosJWT.get(API_URL + "/artikel");
    setArtikel(response.data);
  };

  const deleteArtikel = async (artikelId) => {
    try {
      await axiosJWT.delete(API_URL + "/artikel" + `/${artikelId}`);
      getArtikel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <Link className="button is-small mr-3 is-primary mb-3" to="/addArtikel">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Artikel</span>
        </Link>
        <div style={{ overflowX: "auto" }}>
          <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Artikel</th>
                <th>Isi</th>
                <th>Oleh</th>
                <th>Gambar</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {artikels.map((artikel, index) => (
                <tr key={artikel.id}>
                  <td>{index + 1}</td>
                  <td>{artikel.judul}</td>
                  <td>{artikel.description}</td>
                  <td>{artikel.penulis}</td>
                  <td>
                    <figure className="image is-4by3">
                      <img src={artikel.url} alt="image" />
                    </figure>
                  </td>
                  <td>
                    <div className="columns is-mobile">
                      <div className="column">
                        <Link
                          className="button is-small is-info"
                          to={`editArtikel/${artikel.id}`}
                        >
                          <span className="icon">
                            <GrEdit />
                          </span>
                          <span>EDIT</span>
                        </Link>
                      </div>
                      <div className="column">
                        <a
                          className="button is-danger is-small"
                          onClick={() => deleteArtikel(artikel.id)}
                        >
                          <span>
                            <BsTrash />
                          </span>
                          <span>HAPUS</span>
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ArtikelPage;
