import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiOutlineArrowRight } from "react-icons/ai";

const Youtube = () => {
  const [youtube, setYoutube] = useState([]);

  const iframeUrl = "https://www.youtube.com/embed/";

  const getYoutube = async () => {
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbPOziblvvcffpbO5z1uqVQ&maxResults=3&order=date&key=AIzaSyAWgMCce3z3Mh2fEAPD_jl1m8wSfOoqYBM&type=video"
    );
    setYoutube(data.data.items);
  };

  useEffect(() => {
    getYoutube();
    // getFoto();
  }, []);
  return (
    <div>
      <div
        className="has-text-left my-6"
        style={{ borderLeft: "6px solid red" }}
      >
        <p className="is-size-6 pl-2 has-text-weight-bold">video</p>
      </div>
      <div className="columns is-multiline">
        {youtube.map((yt) => (
          <div className="column is-one-third">
            <iframe src={iframeUrl + yt.id.videoId}></iframe>
          </div>
        ))}
      </div>
      <a
        href={"https://www.youtube.com/@pphimapersis.official3959"}
        className="button is-normal is-black is-centered mb-5"
        style={{
          borderRadius: "0px",
        }}
      >
        lihat Lebih banyak
        <br />
        <span className="icon">
          <AiOutlineArrowRight />
        </span>
      </a>
    </div>
  );
};

export default Youtube;
