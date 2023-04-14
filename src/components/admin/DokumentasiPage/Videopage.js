import React, { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { API_URL } from "../../../utils";
import { Link, useHistory, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Player } from "video-react";

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    refreshToken();
    getVideo();
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

  const getVideo = async () => {
    const response = await axiosJWT.get(API_URL + "/albumvideo/all" + `/${id}`);
    setVideos(response.data);
  };

  const deleteVideo = async (videoId) => {
    try {
      await axiosJWT.delete(API_URL + "/video" + `/${videoId}`);
      getVideo();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <Link
          className="button is-small mr-3 is-primary mb-3"
          to="/adminAlbumVideo"
        >
          <span className="icon">
            <AiOutlineArrowLeft />
          </span>
          <span>Kembali</span>
        </Link>
        <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>No</th>
              <th>Video</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={video.id}>
                <td>{index + 1}</td>
                <td>
                  <Player playsInline src={video.Video.url} />
                </td>
                <td>
                  <a
                    className="button is-danger is-small"
                    onClick={() => deleteVideo(video.Video.id)}
                  >
                    <span>
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
    </>
  );
};

export default VideoPage;
