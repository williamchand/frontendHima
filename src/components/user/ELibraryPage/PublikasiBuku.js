import React, { useState, useEffect } from "react";
import axios from "axios";
import fs from 'fs';
import { API_URL } from "../../../utils";
import { IoMdDownload } from 'react-icons/io';
import FileDownload from 'js-file-download';
import { Buffer } from "buffer";

const PublikasiBuku = () => {
  const [books, setBooks] = useState([]);
  // const [tanggal, setTanggal] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get(API_URL + "/buku");
    setBooks(response.data);
    // const now = response.data.createdAt;
    // const date = dateFormat(now, "d mmmm, yyyy");
    // setTanggal(date);
  };

  const saveFile = async (e, id) => {
    e.preventDefault();
    const data = window.location.replace(API_URL + "/buku" + `/${id}`);
    let buff = new Buffer(data, 'base64');
    const image = fs.writeFileSync('donlod.pdf', buff);
    axios({
      url: image,
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      FileDownload(res.data, "download.pdf")
    })
  }

  return (
    <div className="container">
      <div className="has-text-centered mt-5">
        <h2 className="is-size-3">Publikasi Buku</h2>
        <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
      </div>
      <div className="columns is-multiline m-5">
        {books.map((book) => (
          <div className="column is-one-quarter" key={book.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={book.urlCover} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="content p-3">
                  <h6 className="title">{book.judul}</h6>
                  <a onClick={(e) => { saveFile(e, book.id) }}>
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

export default PublikasiBuku;
