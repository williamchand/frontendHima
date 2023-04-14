import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../../utils";
import moment from "moment";
import { useParams } from "react-router-dom";

const DetailOpini = () => {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getOpiniById();
  }, []);

  const getOpiniById = async () => {
    const response = await axios.get(API_URL + `/opini/${id}/${judul}`);
    setJudul(response.data.judul);
    setPenulis(response.data.penulis);
    setDescription(response.data.description);
    setUrl(response.data.url);
    setDate(response.data.createdAt);
  };
  return (
    <div className="container">
      <div className="card my-5">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <span
                className="title is-size-4 has-text-justified"
                style={{ fontSize: "2rem" }}
              >
                {judul}
              </span>
              <p className="subtitle is-6 mt-1">
                {moment(date).format("dddd, D MMMM YYYY")}
                <br />
                {penulis}
              </p>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={url} alt="image Opini" />
                </figure>
              </div>
              <div
                className="content mt-2 is-size-5-mobile has-text-justified"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOpini;
