import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { API_URL } from "../../../utils";
import { BsTrash } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

const AlbumFoto = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbum();
  }, []);

  const getAlbum = async () => {
    const response = await axios.get(API_URL + "/albumfoto");
    setAlbums(response.data);
  };

  const deleteAlbum = async (fotoId) => {
    try {
      await axios.delete(API_URL + "/albumfoto/all" + `/${fotoId}`);
      getAlbum();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <Link className="button is-small mr-3 is-primary mb-3" to="/addAlbum">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Album</span>
        </Link>
        <div style={{ overflowX: "auto" }}>
          <table className="table is-fullwidth is-bordered is-striped is-narrow is-hoverable">
            <thead>
              <tr>
                <th>No</th>
                <th>Album</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {albums.map((album, index) => (
                <tr key={album.id}>
                  <td>{index + 1}</td>
                  <td>{album.album}</td>
                  <td>
                    <div className="columns is-mobile">
                      <div className="column is-3">
                        <a
                          className="button is-danger is-small mr-3"
                          onClick={() => deleteAlbum(album.id)}
                        >
                          <span className="mr-1">
                            <BsTrash />
                          </span>
                          <span>HAPUS</span>
                        </a>
                      </div>
                      <div className="column is-3">
                        <a
                          href={`adminFoto/${album.id}`}
                          className="button is-info mr-3 is-small"
                        >
                          <span className="mr-1">
                            <AiFillEye />
                          </span>
                          <span>lihat foto</span>
                        </a>
                      </div>
                      <div className="column is-3">
                        <Link
                          to={`addFoto/${album.id}`}
                          className="button is-small is-success"
                        >
                          <span className="mr-1">
                            <IoMdAdd />
                            <span>Tambah Foto</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div className="columns is-multiline is-mobile is-centered">
          {albums.map((album) => (
            <Link to={`adminFoto/${album.id}`} key={album.id}>
              <div className="column">
                <span className="icon-text">
                  <span className="icon">
                    <FcFolder />
                  </span>
                  <span>{album.album}</span>
                </span>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default AlbumFoto;
