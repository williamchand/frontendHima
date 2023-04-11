import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";
import { API_URL } from "../../../utils";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  useEffect(() => {
    refreshToken();
  }, [])

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

  const add = async (e) => {
    e.preventDefault(); //biar tidak reload
    try {
      await axiosJWT.post(API_URL + "/users", {
        name: name,
        email: email,
        password: password,
      });
      history.push("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <h1 className="has-text-centered">{msg}</h1>
                <form className="box" onSubmit={add}>
                  <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        type="email"
                        className="input"
                        autoComplete="off"
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
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field p-3 has-text-centered is-centered">
                    <button className="button is-success mr-4">Register</button>
                    <Link
                      className="button is-danger"
                      as="button"
                      to={"/dashboard"}
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
