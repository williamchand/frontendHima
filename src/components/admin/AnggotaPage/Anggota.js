import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../../utils";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import dateFormat from "dateformat";

const Anggota = () => {
  const [anggota, setAnggota] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    getAnggota();
  }, []);

  const getAnggota = async () => {
    const response = await axios.get(API_URL + "/anggota");
    setAnggota(response.data);

    const now = response.data.createdAt;
    const date = dateFormat(now, "d mmmm yyyy");
    setDate(date);
  };

  const deleteAnggota = async (anggotaId) => {
    try {
      await axios.delete(API_URL + "/anggota" + `/${anggotaId}`);
      getAnggota();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container is-relative mt-5 mb-5">
        <Link className="button is-small mr-3 is-primary mb-3" to="/addAnggota">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Anggota</span>
        </Link>
        <div style={{ overflowX: "auto" }}>
          <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Asal Pimpinan Daerah</th>
                <th>No Hp</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Asal Kampus</th>
                <th>Asal Sekolah</th>
                <th>Foto</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {anggota.map((a, index) => (
                <tr key={a.id}>
                  <td>{index + 1}</td>
                  <td>{a.nama}</td>
                  <td>{a.email}</td>
                  <td>{a.asalPimpinanDaerah}</td>
                  <td>{a.noHp}</td>
                  <td>{a.tempatLahir}</td>
                  <td>{date}</td>
                  <td>{a.asalKampus}</td>
                  <td>{a.asalSekolah}</td>
                  <td>
                    <figure className="image is-4by3">
                      <img src={a.url} alt="image" />
                    </figure>
                  </td>
                  <td>
                    <a
                      className="button is-danger is-small"
                      onClick={() => deleteAnggota(a.id)}
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

export default Anggota;
