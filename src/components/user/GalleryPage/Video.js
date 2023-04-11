import React, { useEffect, useState } from "react";
import axios from "axios";
import { Player } from "video-react";
import { API_URL } from "../../../utils";
import { Link, useParams } from "react-router-dom";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await axios.get(API_URL + "/albumvideo/all" + `/${id}`);
    setVideos(response.data);
  };
  return (
    <div className="container">
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Dokumentasi Video</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-desktop is-multiline m-5">
        {videos.map((video) => (
          <div className="column is-one-quarter" key={video.id}>
            <div className="card">
              <div className="card-image">
                <Player playsInline src={video.Video.url} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-3 pl-5">
        <Link to="/video" className="button" style={{ background: "rgb(252,206,22)" }}>
          Cek Album Lain
        </Link>
      </div>
    </div>
  );
};

export default Video;
