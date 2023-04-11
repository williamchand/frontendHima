import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { useHistory } from "react-router-dom";

const AddAlumni = () => {
  const [nama, setNama] = useState("");
  const [noAnggota, setNoAnggota] = useState("");
  const [asalDaerah, setAsalDaerah] = useState("");
  const [asalKampus, setAsalKampus] = useState("");
  const [pimpinanWilayah, setPimpinanWilayah] = useState("");
  const history = useHistory();

  const saveAlumni = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("noAnggota", noAnggota);
    formData.append("asalDaerah", asalDaerah);
    formData.append("asalKampus", asalKampus);
    formData.append("pimpinanWilayah", pimpinanWilayah);

    try {
      await axios.post(API_URL + "/alumni", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/adminAlumni");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={saveAlumni}>
          <div className="field">
            <label className="label">Nama Kader</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama Alumni"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">No Anggota</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={noAnggota}
                onChange={(e) => setNoAnggota(e.target.value)}
                placeholder="No Anggota"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Asal Daerah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={asalDaerah}
                onChange={(e) => setAsalDaerah(e.target.value)}
                placeholder="Asal Daerah"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Asal Kampus</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={asalKampus}
                onChange={(e) => setAsalKampus(e.target.value)}
                placeholder="Asal Kampus
            "
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pimpinan Wilayah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pimpinanWilayah}
                onChange={(e) => setPimpinanWilayah(e.target.value)}
                placeholder="Pimpinan Wilayah"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAlumni;
