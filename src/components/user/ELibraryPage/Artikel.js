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
            <div className="columns is-1-mobile is-multiline mt-5 mb-5">
                {currentItems.map(artikel => {
                    return (
                        <div className="column is-one-quarter" key={artikel.id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-3by2" >
                                        <img src={artikel.url} alt="image" style={{ width: '100%', height: '100%' }} />
                                    </figure>
                                </div>
                                <div className="card-header" style={{ height: '100px' }}>
                                    <a className="card-header-title has-text-left">
                                        <h6>{artikel.judul}</h6>
                                    </a>
                                </div>
                                <div className="card-footer">
                                    <div className="card-footer-item">
                                        <Link
                                            to={`berita/${artikel.id}/${artikel.judul.replaceAll(" ", "-")}`}
                                            className="button is-info m-0 is-rounded"
                                        >
                                            <span>selengkapnya</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
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