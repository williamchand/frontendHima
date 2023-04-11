import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

const AlumniPage = () => {
  const [alumnis, setAlumnis] = useState([]);

  useEffect(() => {
    getAlumni();
  }, []);

  const getAlumni = async () => {
    const response = await axios.get(API_URL + "/alumni");
    setAlumnis(response.data);
  };

  const deleteAlumni = async (alumniId) => {
    try {
      await axios.delete(API_URL + "/alumni" + `/${alumniId}`);
      getAlumni();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container is-relative mt-5 mb-5">
        <Link className="button is-small mr-3 is-primary mb-3" to="/addAlumni">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Alumni</span>
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
              {alumnis.map((alumni, index) => (
                <tr key={alumni.id}>
                  <td>{index + 1}</td>
                  <td>{alumni.nama}</td>
                  <td>{alumni.noAnggota}</td>
                  <td>{alumni.asalDaerah}</td>
                  <td>{alumni.asalKampus}</td>
                  <td>{alumni.pimpinanWilayah}</td>
                  <td>
                    <Link
                      className="button is-small mr-3 is-info"
                      to={`editAlumni/${alumni.id}`}
                    >
                      <span className="icon">
                        <GrEdit />
                      </span>
                      <span>EDIT</span>
                    </Link>
                    <a
                      className="button is-danger is-small"
                      onClick={() => deleteAlumni(alumni.id)}
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
      </div>
    </>
  );
};

export default AlumniPage;
