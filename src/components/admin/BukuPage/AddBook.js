import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../utils";

const AddBook = () => {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [cover, setCover] = useState("");
  const [file, setFile] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [previewFile, setPreviewFile] = useState("");
  const history = useHistory();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setCover(image);
    setPreviewImg(URL.createObjectURL(image));
  };

  const loadFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPreviewFile(URL.createObjectURL(file));
  };

  const saveBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("penulis", penulis);
    formData.append("cover", cover);
    formData.append("judul", judul);
    try {
      await axios.post(API_URL + "/buku", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/adminBuku");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={saveBook}>
          <div className="field">
            <label className="label">Nama Buku</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul Buku"
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
                placeholder="Judul Buku"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Cover Buku</label>
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
                  {previewImg ? (
                    <figure>
                      <img src={previewImg} alt="Preview image" className="image is-128x128" />
                    </figure>
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Buku</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadFile}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file ..</span>
                  </span>
                </label>
                {previewFile ? (
                  <figure>
                    <img src={previewFile} alt="book" className="image is-128x128" />
                  </figure>
                ) : (
                  ""
                )}
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

export default AddBook;
