import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

const KaderPage = () => {
  const [kaders, setKaders] = useState([]);

  useEffect(() => {
    getKader();
  }, []);

  const getKader = async () => {
    const response = await axios.get(API_URL + "/kader");
    setKaders(response.data);
  };

  const deleteKader = async (kaderId) => {
    try {
      await axios.delete(API_URL + "/kader" + `/${kaderId}`);
      getKader();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container is-relative mt-5 mb-5">
        <Link className="button is-small mr-3 is-primary mb-3" to="/addKader">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Kader</span>
        </Link>
        <div style={{ overflowX: "auto" }}>
          <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>No Anggota</th>
                <th>Asal Daerah</th>
                <th>Asal Kampus</th>
                <th>Pimpinan Wilayah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {kaders.map((kader, index) => (
                <tr key={kader.id}>
                  <td>{index + 1}</td>
                  <td>{kader.nama}</td>
                  <td>{kader.noAnggota}</td>
                  <td>{kader.asalDaerah}</td>
                  <td>{kader.asalKampus}</td>
                  <td>{kader.pimpinanWilayah}</td>
                  <td>
                    <div className="columns is-mobile">
                      <div className="column is-4">
                        <Link
                          className="button is-small mr-3 is-info"
                          to={`editKader/${kader.id}`}
                        >
                          <span className="icon">
                            <GrEdit />
                          </span>
                          <span>EDIT</span>
                        </Link>
                      </div>
                      <div className="column">
                        <a
                          className="button is-danger is-small"
                          onClick={() => deleteKader(kader.id)}
                        >
                          <span>
                            <BsTrash />
                          </span>
                          <span>HAPUS</span>
                        </a>
                      </div>
                    </div>
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

export default KaderPage;
