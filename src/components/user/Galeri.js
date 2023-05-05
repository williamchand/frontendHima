import React from 'react'

const Galeri = () => {
  return (
    <div className='p-6'>
        <div
        className="has-text-left mb-4"
        style={{ borderLeft: "6px solid red" }}
    >
        <p className="is-size-6 pl-2 has-text-weight-bold">
        Galeri
        </p>
    </div>
    <div className="tabs ">
        <ul>
            <li class="is-active"><a>Dokumentasi</a></li>
            <li><a>Infografis</a></li>
            {/* <li><a>Berita</a></li>
            <li><a>Opini</a></li> */}
        </ul>
    </div>
    </div>
  )
}

export default Galeri