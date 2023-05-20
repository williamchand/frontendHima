import React from "react";

const Inpografis = ({ infografis }) => {
  return (
    <div>
      <div
        className="has-text-left mt-6"
        style={{ borderLeft: "6px solid red" }}
      >
        <p className="is-size-6 pl-2 has-text-weight-bold">Infografis</p>
      </div>
      <hr />
      <div className="columns mb-6">
        {(infografis || []).map((e) => (
          <div className="column">
            <div class="card">
              <div class="card-image">
                <figure class="image">
                  <img src={e.url} alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inpografis;
