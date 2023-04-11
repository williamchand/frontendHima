import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API_URL } from "../../../utils";
import axios from "axios";

const EditKader = () => {
  const [nama, setNama] = useState("");
  const [noAnggota, setNoAnggota] = useState("");
  const [asalDaerah, setAsalDaerah] = useState("");
  const [asalKampus, setAsalKampus] = useState("");
  const [pimpinanWilayah, setPimpinanWilayah] = useState("");
  const history = useHistory();
  const { id } = useParams();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getKaderById();
  }, []);

  const updateKader = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("noAnggota", noAnggota);
    formData.append("asalDaerah", asalDaerah);
    formData.append("asalKampus", asalKampus);
    formData.append("pimpinanWilayah", pimpinanWilayah);
    try {
      await axios.put(API_URL + "/kader" + `/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      history.push("/adminKader");
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };

  const getKaderById = async () => {
    const response = await axios.get(API_URL + `/kader/${id}`);
    setNama(response.data.nama);
    setNoAnggota(response.data.noAnggota);
    setAsalDaerah(response.data.asalDaerah);
    setAsalKampus(response.data.asalKampus);
    setPimpinanWilayah(response.data.pimpinanWilayah);
  };
  return (
    <div className="columns is-centered mt-5 mb-5">
      <div className="column is-half">
        <form onSubmit={updateKader}>
          <h1 className="has-text-centered">{msg}</h1>
          <div className="field">
            <label className="label">Nama Kader</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama Kader"
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditKader;
