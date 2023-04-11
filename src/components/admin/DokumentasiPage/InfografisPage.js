import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { API_URL } from "../../../utils";
import { IoMdAdd } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const InfografisPage = () => {
  const [infografiss, setInfografiss] = useState([]);
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();

  useEffect(() => {
    refreshToken();
    getInfografis();
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

  const getInfografis = async () => {
    const response = await axiosJWT.get(API_URL + "/infografis", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setInfografiss(response.data);
  };

  const deleteInfografis = async (infografisId) => {
    try {
      await axiosJWT.delete(API_URL + "/infografis" + `/${infografisId}`);
      getInfografis();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <Link
          className="button is-small mr-3 is-primary mb-3"
          to="/addInfografis"
        >
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Foto</span>
        </Link>
        <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>No</th>
              <th>infografis</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {infografiss.map((infografis, index) => (
              <tr key={infografis.id}>
                <td>{index + 1}</td>
                <td>
                  <figure className="image is-64x64">
                    <img src={infografis.url} alt="image" />
                  </figure>
                </td>
                <td>
                  <a
                    className="button is-danger is-small"
                    onClick={() => deleteInfografis(infografis.id)}
                  >
                    <span>
                      <BsTrash />
                    </span>
                    <span>HAPUS</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InfografisPage;
