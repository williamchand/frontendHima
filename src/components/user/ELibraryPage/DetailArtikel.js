import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../utils";
import dateFormat from "dateformat";
// import {
//   FacebookIcon,
//   FacebookShareButton,
//   TelegramIcon,
//   TelegramShareButton,
//   WhatsappIcon,
//   WhatsappShareButton,
// } from "react-share";
import Meta from "../../../utils/Meta";
import moment from "moment";

const DetailArtikel = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [url, setUrl] = useState("");
  const [oleh, setOleh] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getArtikelById();
  }, []);

  const getArtikelById = async () => {
    const response = await axios.get(API_URL + `/artikel/${id}/${judul}`);
    setJudul(response.data.judul);
    setIsi(response.data.description);
    setUrl(response.data.url);
    setOleh(response.data.penulis);
    setDate(response.data.createdAt);

    // const now = response.data.createdAt;
    // const date = dateFormat(now, "dddd, d mmmm yyyy || HH:MM");
    // setCreatedAt(date);
  };

  return (
    <>
      <Meta
        title={judul}
        desc={isi}
        imageUrl={url}
      />
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <span className="title is-size-4 has-text-justified" style={{ fontSize: '2rem' }}>{judul}</span>
                <p className="subtitle is-6 mt-1">
                  {/* {moment.locale()} */}
                  {moment(date).format("dddd, D MMMM YYYY")}
                  <br />
                  {oleh}
                </p>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={url} alt="Placeholder image" />
                  </figure>
                </div>
                <div
                  className="content mt-2 is-size-5-mobile has-text-justified"
                  dangerouslySetInnerHTML={{ __html: isi }}
                ></div>
                <div className="pt-5 pl-3">
                  {/* <span className="icon mr-5">
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                  </span>
                  <span className="icon mr-5">
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                  </span> */}
                  {/* <span className="icon">
                    <TelegramShareButton url={shareUrl}>
                      <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailArtikel;
