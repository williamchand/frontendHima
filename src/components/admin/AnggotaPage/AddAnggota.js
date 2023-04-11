import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

const AddAnggota = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asalPimpinan, setAsalPimpinan] = useState("");
  const [noHp, setNoHp] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState(new Date());
  const [foto, setFoto] = useState("");
  const [asalKampus, setAsalKampus] = useState("");
  const [asalSekolah, SetAsalSekolah] = useState("");
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState("");
  const history = useHistory();

  const options = [
    {
      value: "batam",
      label: "Batam",
    },
    {
      value: "Pinang",
      label: "Pinang",
    },
    {
      value: "Karimun",
      label: "Karimun",
    },
  ];

  // const getPimpinan = async () => {
  //   const response = await axios.get(API_URL + "/kader");
  //   console.log(response.data);
  // }

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFoto(image);
    setPreview(URL.createObjectURL(image));
  };

  const Register = async (e) => {
    e.preventDefault(); //biar tidak reload
    const formData = new FormData();
    formData.append("nama", name);
    formData.append("email", email);
    formData.append("asalPimpinanDaerah", asalPimpinan);
    formData.append("noHp", noHp);
    formData.append("tempatLahir", tempatLahir);
    formData.append("tanggalLahir", tanggalLahir);
    formData.append("foto", foto);
    formData.append("asalKampus", asalKampus);
    formData.append("asalSekolah", asalSekolah);
    try {
      await axios.post(API_URL + "/anggota", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      window.location.reload(true);
      history.push("/anggotaBaru");
      // setSuccess(msg);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-desktop is-10-mobile">
                <h1 className="has-text-centered">{msg}</h1>
                <form className="box" onSubmit={Register}>
                  <div className="field">
                    <label className="label">Nama</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        type="email"
                        className="input"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">No Hp</label>
                    <div className="control">
                      <input
                        type="number"
                        className="input"
                        autoComplete="off"
                        value={noHp}
                        onChange={(e) => setNoHp(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Asal Pimpinan Daerah</label>
                    <div className="control">
                      <Select options={options} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Tempat Lahir</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        autoComplete="off"
                        value={tempatLahir}
                        onChange={(e) => setTempatLahir(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Tanggal Lahir</label>
                    <div className="control">
                      <DatePicker
                        selected={tanggalLahir}
                        onChange={(date) => setTanggalLahir(date)}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Foto</label>
                    <div className="control">
                      <div className="file">
                        <label className="file-label">
                          <input
                            type="file"
                            className="file-input"
                            onChange={loadImage}
                          />
                          <span className="file-cta">
                            <span className="file-label">Choose a file ..</span>
                          </span>
                          <span className="ml-5">
                            {preview ? (
                              <figure className="image is-128x128 mb-5">
                                <img src={preview} alt="Preview image" />
                              </figure>
                            ) : (
                              ""
                            )}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Asal Kampus</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        autoComplete="off"
                        value={asalKampus}
                        onChange={(e) => setAsalKampus(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Asal Sekolah</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        autoComplete="off"
                        value={asalSekolah}
                        onChange={(e) => SetAsalSekolah(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field p-3 has-text-centered is-centered">
                    <button className="button is-success mr-4">Register</button>
                    <Link
                      className="button is-danger"
                      as="button"
                      to={"/dashboard"}
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAnggota;
