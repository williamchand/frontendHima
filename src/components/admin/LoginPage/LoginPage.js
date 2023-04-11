import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { API_URL } from "../../../utils";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL + "/login", {
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
                <form className="box" onSubmit={Auth}>
                  <h1 className="has-text-centered">{msg}</h1>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        type="email"
                        className="input"
                        autoComplete="off"
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
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-success is-fullwidth">
                      Login
                    </button>
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

export default LoginPage;
