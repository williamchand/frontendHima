import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { API_URL } from "../../../utils";
import { FcFolder } from "react-icons/fc";

const AlbumFoto = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbum();
    }, []);

    const getAlbum = async () => {
        const response = await axios.get(API_URL + "/albumfoto");
        setAlbums(response.data);
    };
    return (
        <>
            <div className="container mt-5 mb-6">
                <div className="has-text-centered my-5">
                    <h2 className="is-size-3">Dokumentasi Foto</h2>
                    <h6 className="is-size-7">Himpunan Mahasiswa Persatuan Islam</h6>
                </div>
                <div className="columns is-multiline is-mobile is-centered">
                    {albums.map((album) => (
                        <Link to={`albumfoto/${album.id}`} key={album.id}>
                            <div className="column">
                                <span className="icon-text">
                                    <span className="icon">
                                        <FcFolder />
                                    </span>
                                    <span className="has-text-black">{album.album}</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AlbumFoto;
