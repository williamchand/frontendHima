import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, Route, useRouteMatch } from "react-router-dom";
import DetailArtikel from "./DetailArtikel";

export default function Artikel(props) {
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
      <div className="columns is-1-mobile is-multiline m-5">
        {currentItems.map((artikel) => {
          return (
            <div className="column is-one-quarter" key={artikel.id}>
              <div className="card">
                    <Link
                      to={`berita/${artikel.id}/${artikel.judul.replaceAll(
                        " ",
                        "-"
                      )}`}
                    >
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img
                      src={artikel.url}
                      alt="image"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </figure>
                </div>
                <div className="card-header is-flex is-justify-content-space-between" style={{ minHeight: "120px" }}>
                    <p className="p-3 is-flex is-justify-content-space-between">
                      {
                        (artikel.judul.split(' ').length > 9)?
                        <h6 className="has-text-black">{artikel.judul.split(' ').slice(0,9).join(' ')}...</h6>:
                        <h6 className="has-text-black">{artikel.judul}</h6>
                      }
                    </p>
                </div>
                  </Link>
              </div>
            </div>
          );
        })}
        <Route path={`${path}/:id/:judul`}>
          <DetailArtikel />
        </Route>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination is-small"
        previousLinkClassName="pagination-previous"
        nextLinkClassName="pagination-next"
        pageLinkClassName="pagination-link"
        activeLinkClassName="is-current"
        // className="pagination-list"
      />
    </>
  );
}
