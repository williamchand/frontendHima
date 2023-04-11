import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { API_URL } from "../../../utils";

const AddVideo = () => {
  const [file, setFile] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [preview, setPreview] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const loadImage = (e) => {
    const video = e.target.files[0];
    setFile(video);
    setPreview(URL.createObjectURL(video));
  };

  const saveVideo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("albumvideoId", albumId);
    try {
      await axios.post(API_URL + "/video/add" + `/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push(`/adminVideo/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <h6 className="has-text-danger">DiSarankan Kompres Video Dahulu Maks 50mb</h6>
        <form onSubmit={saveVideo}>
          <div className="field">
            <label className="label">Video</label>
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

          {preview ? (
            <figure className="image is-128x128 mb-5">
              <img src={preview} alt="Preview video" />
            </figure>
          ) : (
            ""
          )}

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

export default AddVideo;
