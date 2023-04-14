import React, { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import DetailOpini from "./DetailOpini";
import ReactPaginate from "react-paginate";

export default function Opini(props) {
  let { path } = useRouteMatch();
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="columns is-1-mobile is-multiline mt-5 mb-5">
        {currentItems.map((opini) => {
          return (
            <div className="column is-one-quarter" key={opini.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img
                      src={opini.url}
                      alt="image"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </figure>
                </div>
                <div className="card-header" style={{ height: "100px" }}>
                  <Link
                    className="card-header-title has-text-left"
                    to={`opini/${opini.id}/${opini.judul.replaceAll(" ", "-")}`}
                  >
                    <p className="card-header-title">
                      <h6 className="is-size-6-mobile is-size-7 has-text-justify">
                        {opini.judul}
                      </h6>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Route path={`${path}:/id/:judul`}>
        <DetailOpini />
      </Route>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination is-small"
        previousLinkClassName="pagination-previous"
        nextLinkClassName="pagination-next"
        pageLinkClassName="pagination-link"
        activeLinkClassName="is-current"
      />
    </>
  );
}
