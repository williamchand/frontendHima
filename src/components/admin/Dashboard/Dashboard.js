import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { API_URL } from "../../../utils";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    refreshToken();
    getUsers();
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

  const getUsers = async () => {
    // const response = await axiosJWT.get(API_URL + "/users");
    // setUsers(response.data);
  };

  const deleteUsers = async (userId) => {
    try {
      await axiosJWT.delete(API_URL + "/users" + `/${userId}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <h1 className="mb-5">Welcome Back : {name}</h1>
        <Link className="button is-small mr-3 is-primary mb-3" to={"/register"}>
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>TAMBAH DATA</span>
        </Link>
        <div style={{ overflowX: "auto" }}>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <a
                      className="button is-danger is-small"
                      onClick={() => deleteUsers(user.id)}
                    >
                      <span className="icon">
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
      </div>
    </>
  );
};

export default Dashboard;
