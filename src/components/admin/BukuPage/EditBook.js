import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API_URL } from "../../../utils";
import axios from "axios";

const EditBook = () => {
  const [judul, setJudul] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateBook = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("judul", judul);
    try {
      await axios.patch(API_URL + "/buku" + `/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/buku");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };

  const getBookById = async () => {
    const response = await axios.get(API_URL + `/buku/${id}`);
    setJudul(response.data.judul);
    setFile(response.data.file);
  };
  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={updateBook}>
          <h1 className="has-text-centered">{msg}</h1>
          <div className="field">
            <label className="label">Book Name</label>
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
            <label className="label">File Book</label>
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
