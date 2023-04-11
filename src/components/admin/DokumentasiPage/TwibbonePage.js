import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { API_URL } from "../../../utils";
import { Link, useHistory } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";

const TwibbonePage = () => {
  const [Twibbones, setTwibbones] = useState([]);
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();

  useEffect(() => {
    refreshToken();
    getTwibbone();
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

  const getTwibbone = async () => {
    const response = await axiosJWT.get(API_URL + "/twibbone");
    setTwibbones(response.data);
  };

  const deleteTwibbone = async (twibboneId) => {
    try {
      await axiosJWT.delete(API_URL + "/twibbone" + `/${twibboneId}`);
      getTwibbone();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <Link
          className="button is-small mr-3 is-primary mb-3"
          to="/addTwibbone"
        >
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Twibbone</span>
        </Link>
        <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>No</th>
              <th>Twibbone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Twibbones.map((Twibbone, index) => (
              <tr key={Twibbone.id}>
                <td>{index + 1}</td>
                <td>
                  <figure className="image is-64x64">
                    <img src={Twibbone.url} alt="image" />
                  </figure>
                </td>
                <td>
                  <a
                    className="button is-danger is-small"
                    onClick={() => deleteTwibbone(Twibbone.id)}
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

export default TwibbonePage;
