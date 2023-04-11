import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API_URL } from "../../../utils";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditArtikel = () => {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [description, setDescription] = useState("");
  const [gambar, setGambar] = useState("");
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const handleOnChange = (e, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setGambar(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateArtikel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("penulis", penulis);
    formData.append("description", description);
    formData.append("gambar", gambar);
    try {
      await axios.put(API_URL + "/artikel" + `/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/adminArtikel");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };


  const getBookById = async () => {
    const response = await axios.get(API_URL + `/artikel/${id}`);
    setJudul(response.data.judul);
    setPenulis(response.data.penulis);
    setDescription(response.data.description);
    setGambar(response.data.gambar);
  };
  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={updateArtikel}>
          <h1 className="has-text-centered">{msg}</h1>
          <div className="field">
            <label className="label">Judul Artikel</label>
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
            <label className="label">Penulis Artikel</label>
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
            <label className="label">Isi Artikel</label>
            <div className="control">
              {/* <textarea
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Judul Buku"
              /> */}
              <CKEditor editor={ClassicEditor} onChange={handleOnChange} data={description} />
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
                    <span className="file-label">Choose a image ..</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview image" />
            </figure>
          ) : (
            ""
          )}

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

export default EditArtikel;
