import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrEdit } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { API_URL } from "../../../utils";

const BukuPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await axios.get(API_URL + "/buku");
    setBooks(response.data);
  };

  const deleteBook = async (bookId) => {
    try {
      await axios.delete(API_URL + "/buku" + `/${bookId}`);
      getBooks();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-5 mb-5 is-relative">
        <Link className="button is-small mr-3 is-primary mb-3" to="/addBook">
          <span className="icon">
            <IoMdAdd />
          </span>
          <span>Tambah Buku</span>
        </Link>
        <div style={{ overflowX: "auto" }}>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Buku</th>
                <th>Penulis</th>
                <th>Cover Buku</th>
                <th>Buku</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.judul}</td>
                  <td>{book.penulis}</td>
                  <td>
                    <figure className="image is-4by3">
                      <img src={book.urlCover} alt="image" />
                    </figure>
                  </td>
                  <td>
                    <h6>{book.file}</h6>
                  </td>
                  <td>
                    <a
                      className="button is-danger is-small"
                      onClick={() => deleteBook(book.id)}
                    >
                      <span className="icon">
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
      </div>
    </>
  );
};

export default BukuPage;
