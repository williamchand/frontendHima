import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AiOutlineArrowRight } from "react-icons/ai";

const Youtube = ({ youtube }) => {
  const iframeUrl = "https://www.youtube.com/embed/";

  useEffect(() => {}, []);

  return (
    <div>
      <div
        className="has-text-left my-6"
        style={{ borderLeft: "6px solid red" }}
      >
        <p className="is-size-6 pl-2 has-text-weight-bold">video</p>
      </div>
      <div className="columns ">
        {(youtube || []).map((yt) => (
          <div className="column">
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
