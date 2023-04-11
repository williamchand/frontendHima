import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../utils";

const AddJurnal = () => {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const history = useHistory();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveJurnal = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("penulis", penulis);
    formData.append("file", file);
    try {
      await axios.post(API_URL + "/jurnal", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/adminJurnal");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={saveJurnal}>
          <div className="field">
            <label className="label">Nama Jurnal</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul Jurnal"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Penulis</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={penulis}
                onChange={(e) => setPenulis(e.target.value)}
                placeholder="Nama Penulis Jurnal"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">File Jurnal</label>
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
  );
};

export default AddJurnal;
