import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { API_URL } from "../../../utils";

const JurnalPage = () => {
  const [jurnals, setJurnals] = useState([]);

  useEffect(() => {
    getJurnals();
  }, []);

  const getJurnals = async () => {
    const response = await axios.get(API_URL + "/jurnal");
    setJurnals(response.data);
  };

  const deleteJurnal = async (jurnalId) => {
    try {
      await axios.delete(API_URL + "/jurnal" + `/${jurnalId}`);
      getJurnals();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5" style={{ position: "relative" }}>
        <Link className="button is-small mr-3 is-primary mb-3" to="/addJurnal">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>TAMBAH Jurnal</span>
        </Link>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Penulis</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {jurnals.map((jurnal, index) => (
              <tr key={jurnal.id}>
                <td>{index + 1}</td>
                <td>{jurnal.judul}</td>
                <td>{jurnal.penulis}</td>
                <td>
                  {/* <Link
                    className="button is-small mr-3 is-info"
                    to={`editJurnal/${jurnal.id}`}
                  >
                    <span className="icon">
                      <GrEdit />
                    </span>
                    <span>EDIT</span>
                  </Link> */}
                  <a
                    className="button is-danger is-small"
                    onClick={() => deleteJurnal(jurnal.id)}
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
    </>
  );
};

export default JurnalPage;
