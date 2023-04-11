import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory, useParams } from "react-router";
import { API_URL } from "../../../utils";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [expire, setExpire] = useState("");
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();
  const { id } = useParams;

  useEffect(() => {
    refreshToken();
    getUserById();
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

  const updateUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confPassword", confPassword);
    try {
      await axios.patch(API_URL + "/users" + `/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/users");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(API_URL + `/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setName(response.data.name);
    setEmail(response.data.email);
    setPassword(response.data.password);
    setConfPassword(response.data.confPassword);
  };
  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <h1 className="has-text-centered">{msg}</h1>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Konfirmasi Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
