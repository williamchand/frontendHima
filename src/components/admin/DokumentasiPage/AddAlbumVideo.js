import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../utils";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

const AddAlbumVideo = () => {
    const [album, setAlbum] = useState("");
    const [name, setName] = useState("");
    const [expire, setExpire] = useState("");
    const [token, setToken] = useState("");
    const history = useHistory();

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get(API_URL + "/token");
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/login");
            }
        }
    };

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            const currentDate = new Date();
            if (expire * 1000 < currentDate.getTime()) {
                const response = await axios.get(API_URL + "/token");
                config.headers.Authorization = `Bearer ${response.data.accessToken}`;
                setToken(response.data.accessToken);
                const decoded = jwt_decode(response.data.accessToken);
                setName(decoded.name);
                setExpire(decoded.exp);
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    const saveAlbum = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("album", album);
        try {
            await axiosJWT.post(API_URL + "/albumvideo", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            history.push("/adminAlbumVideo");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns is-centered mt-5 mb-5">
            <div className="column is-half">
                <form onSubmit={saveAlbum}>
                    <div className="field">
                        <label className="label">Nama Album</label>
                        <div className="control">
                            <div className="">
                                <input
                                    type="text"
                                    className="input"
                                    value={album}
                                    onChange={(e) => setAlbum(e.target.value)}
                                />
                            </div>
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

export default AddAlbumVideo;
