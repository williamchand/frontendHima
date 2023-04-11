import React, { useEffect, useState } from "react";
import { API_URL } from "../../../utils";
import axios from "axios";
import fs from 'fs';
import { IoMdDownload } from 'react-icons/io';
import FileDownload from 'js-file-download';
import { Buffer } from "buffer";

const Twibbone = () => {
  const [twibbone, setTwibbone] = useState([]);

  useEffect(() => {
    getTwibbone();
  }, []);

  const getTwibbone = async () => {
    const response = await axios.get(API_URL + "/twibbone");
    setTwibbone(response.data);
  };

  const download = async (e, id) => {
    e.preventDefault();
    const data = window.location.replace(API_URL + "/twibbone" + `/${id}`);
    let buff = new Buffer(data, 'base64');
    const image = fs.writeFileSync('donlod.png', buff);
    axios({
      url: image,
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      FileDownload(res.data, "download.png")
    })
  }

  return (
    <div className="container">
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Twibbone</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-desktop is-multiline m-5">
        {twibbone.map((tw) => (
          <div className="column is-one-quarter" key={tw.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={tw.url} alt="image" />
                </figure>
              </div>
              <div className="content p-3">
                <a onClick={(e) => download(e, tw.id)}>
                  <div className="icon-text has-text-black">
                    <span className="icon has-text-info">
                      <IoMdDownload className="icon has-text-black" />
                    </span>
                    <span>Download</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Twibbone;
