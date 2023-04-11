import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../utils";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddArtikel = () => {
  const [judul, setJudul] = useState("");
  const [description, setDescription] = useState("");
  const [penulis, setPenulis] = useState("");
  const [gambar, setGambar] = useState("");
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  useEffect(() => {
    refreshToken();
  }, [])

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setGambar(image);
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


  const saveArtikel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("penulis", penulis);
    formData.append("description", description);
    formData.append("gambar", gambar);
    try {
      await axiosJWT.post(API_URL + "/artikel", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/adminArtikel");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="columns is-centered mt-5 mb-5">
        <div className="column is-half">
          <form onSubmit={saveArtikel}>
            <div className="field">
              <label className="label">Judul Artikel</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Judul Artikel"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Isi Artikel</label>
              <div className="control">
                <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">Penerbit</label>
              <div className="control">
                <input
                  className="input"
                  value={penulis}
                  onChange={(e) => setPenulis(e.target.value)}
                  placeholder="Penulis"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gambar Artikel</label>
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
                    {preview ? (
                      <figure className="image is-128x128 mb-5">
                        <img src={preview} alt="Preview image" />
                      </figure>
                    ) : (
                      ""
                    )}
                  </label>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default AddArtikel;
