import React, { useEffect, useState } from "react";
import axios from "axios";
import fs from "fs";
import FileDownload from "js-file-download";
import { Buffer } from "buffer";
import { API_URL } from "../../../utils";
import { IoMdDownload } from "react-icons/io";

const PublikasiJurnal = () => {
  const [jurnals, setJurnals] = useState([]);

  useEffect(() => {
    getJurnals();
  }, []);

  const getJurnals = async () => {
    const response = await axios.get(API_URL + "/jurnal");
    setJurnals(response.data);
  };

  const download = async (e, id) => {
    e.preventDefault();
    const data = window.location.replace(API_URL + "/jurnal" + `/${id}`);
    let buff = new Buffer(data, "base64");
    const image = fs.writeFileSync("donlod.pdf", buff);
    axios({
      url: image,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "download.pdf");
    });
  };

  const coba = [
    {
      id: 1,
      judul: "jurnal1",
    },
    {
      id: 2,
      judul: "jurnal2",
    },
    {
      id: 3,
      judul: "jurnal3",
    },
    {
      id: 4,
      judul: "jurnal4",
    },
    {
      id: 5,
      judul: "jurnal5",
    },
  ];

  return (
    <div className="container">
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Publikasi Jurnal</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-multiline mt-5 mb-5">
        {jurnals.slice(0, 4).map((jurnal) => (
          <div className="column is-one-quarter" key={jurnal.id}>
            <div className="card">
              <div className="card-content">
                <div className="content p-3">
                  <h5 className="title">{jurnal.judul}</h5>
                  <a
                    onClick={(e) => {
                      download(e, jurnal.id);
                    }}
                    target="block"
                  >
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublikasiJurnal;
