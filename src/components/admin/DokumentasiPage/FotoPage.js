import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../utils";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const FotoPage = () => {
  const [fotos, setFotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFoto();
  }, []);


  const getFoto = async () => {
    const response = await axios.get(API_URL + "/albumfoto/all" + `/${id}`,);
    setFotos(response.data);
  };

  const deleteFoto = async (fotoId) => {
    try {
      await axios.delete(API_URL + "/foto" + `/${fotoId}`);
      getFoto();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <Link className="button is-small mr-3 is-primary mb-3" to="/adminAlbum">
          <span className="icon">
            <AiOutlineArrowLeft />
          </span>
          <span>Kembali</span>
        </Link>
        <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Album</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fotos.map((foto, index) => (
              <tr key={foto.id}>
                <td>{index + 1}</td>
                <td>
                  <figure className="image is-64x64">
                    <img src={foto.Foto.url} alt="image" />
                  </figure>
                </td>
                <td>{foto.album}
                </td>
                <td>
                  <a
                    className="button is-danger is-small"
                    onClick={() => deleteFoto(foto.Foto.id)}
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
    </>
  );
};

export default FotoPage;
