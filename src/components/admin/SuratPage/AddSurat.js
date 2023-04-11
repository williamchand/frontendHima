import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils";

const AddSurat = () => {
  const [nama, setNama] = useState("");
  const [file, setFile] = useState("");
  const [cover, setCover] = useState("");
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

  const saveSurat = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("file", file);
    formData.append("cover", cover);
    try {
      await axios.post(API_URL + "/surat", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/adminSurat");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={saveSurat}>
          <div className="field">
            <label className="label">Nama Surat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama Surat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Cover</label>
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
                      <img
                        src={previewImg}
                        alt="Preview image"
                        className="image is-128x128"
                      />
                    </figure>
                  ) : (
                    ""
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Surat</label>
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
                    <img
                      src={previewFile}
                      alt="surat"
                      className="image is-128x128"
                    />
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

export default AddSurat;
