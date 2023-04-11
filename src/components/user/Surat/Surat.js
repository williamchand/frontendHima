import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../utils";
import { IoMdDownload } from "react-icons/io";
import FileDownload from 'js-file-download';
import { Buffer } from "buffer";
import fs from 'fs';


const Surat = () => {
  const [surat, setSurat] = useState([]);

  useEffect(() => {
    getSurats();
  }, []);

  const getSurats = async () => {
    const response = await axios.get(API_URL + "/surat");
    setSurat(response.data);
  };

  const download = async (e, id) => {
    e.preventDefault();
    const data = window.location.replace(API_URL + "/surat" + `/${id}`);
    let buff = new Buffer(data, 'base64');
    const image = fs.writeFileSync('donlod.pdf', buff);
    axios({
      url: image,
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      FileDownload(res.data, "download.pdf")
    })
  };

  return (
    <div className="container">
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Surat</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-desktop is-multiline m-5">
        {surat.map((srt) => (
          <div className="column is-one-quarter" key={srt.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={srt.urlCover} alt="image" />
                </figure>
              </div>
              <div className="content p-3">
                <p>{srt.nama}</p>
                <a onClick={(e) => { download(e, srt.id) }}>
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

export default Surat;
