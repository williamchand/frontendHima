import React, { useEffect, useState } from "react";
import axios from "axios";
// import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { API_URL } from "../../../utils";

const SuratPage = () => {
  const [surats, setSurats] = useState([]);

  useEffect(() => {
    getSurats();
  }, []);

  const getSurats = async () => {
    const response = await axios.get(API_URL + "/surat");
    setSurats(response.data);
  };

  const deleteSurat = async (bookId) => {
    try {
      await axios.delete(API_URL + "/surat" + `/${bookId}`);
      getSurats();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <Link className="button is-small mr-3 is-primary mb-3" to="/addSurat">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Surat</span>
        </Link>
        <div style={{ overflowX: "auto" }}>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Surat</th>
                <th>Cover Surat</th>
                <th>Surat</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {surats.map((surat, index) => (
                <tr key={surat.id}>
                  <td>{index + 1}</td>
                  <td>{surat.nama}</td>
                  <td>
                    <figure className="image is-4by3">
                      <img src={surat.urlCover} alt="image" />
                    </figure>
                  </td>
                  <td>
                    <h6>{surat.file}</h6>
                  </td>
                  <td>
                    <a
                      className="button is-danger is-small"
                      onClick={() => deleteSurat(surat.id)}
                    >
                      <span className="icon">
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
      </div>
    </>
  );
};

export default SuratPage;
