import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { API_URL } from "../../../utils";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

const AddFoto = () => {
  const [file, setFile] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [token, setToken] = useState("");
  const [preview, setPreview] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    refreshToken();
  }, []);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

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

  // const getAlbumFotoId = async () => {
  //   const response = await axios.get(API_URL + "albumfoto/all" + `${id}`);
  //   setAlbumId(response.data.Foto.AlbumFotoId);
  // }

  const saveFoto = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("albumfotoId", albumId);
    try {
      await axiosJWT.post(API_URL + "/foto/add" + `/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push(`/adminFoto/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={saveFoto}>
          <div className="field">
            <label className="label">Gambar</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file ..</span>
                  </span>
                </label>
              </div>
              {preview ? (
                <figure className="image is-128x128 mb-5">
                  <img src={preview} alt="Preview image" />
                </figure>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
};

export default AddFoto;
