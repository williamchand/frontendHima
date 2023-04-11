import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const HelpdeskPage = () => {
  const [status, setStatus] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jall7fi",
        "template_puyxio2",
        e.target,
        "m3GeKZv5Coee4tFXp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCES");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === "SUCCES") {
      setTimeout(() => {
        setStatus("");
      }, 2000);
    }
  }, [status]);

  return (
    <div className="hero is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <h1 className="has-text-centered has-text-weight-bold is-size-4 mb-5">Kirim Pesan Ke HimaPersis</h1>
              {status && renderAlert()}
              <form onSubmit={sendEmail}>
                <div className="field">
                  <label className="label">Nama</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Pesan</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="button is-link"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderAlert = () => (
  <div className="has-background-primary has-text-centered mb-5">
    <p className="has-text-success-light">pesan terkirim</p>
  </div>
);
export default HelpdeskPage;
