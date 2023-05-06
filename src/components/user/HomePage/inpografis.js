import React from "react";

const Inpografis = () => {
    const coba = [
        { 
          id: 1,
          url: "https://server.himapersis.id/infografis/07f7598f319985ed344a4db094689446.jpeg"
        },
        {
          id: 2,
          url: "https://server.himapersis.id/infografis/cac7ce24b24166be4ed190d76de55974.jpeg"
        },
        {
          id: 2,
          url: "https://server.himapersis.id/infografis/cac7ce24b24166be4ed190d76de55974.jpeg"
        },
        {
          id: 2,
          url: "https://server.himapersis.id/infografis/cac7ce24b24166be4ed190d76de55974.jpeg"
        },
      ]

    return (
        <div>
            <div
            className="has-text-left mt-6"
            style={{ borderLeft: "6px solid red" }}
            >
                <p className="is-size-6 pl-2 has-text-weight-bold">
                    Foto
                </p>
            </div>
            <hr/>
        <div className="columns mb-6">
            {
                coba.slice(0,4).map((e) => (
                    <div className="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                <img src={e.url} alt="Placeholder image"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Inpografis