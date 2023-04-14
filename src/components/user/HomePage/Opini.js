import { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import moment from "moment/moment";
import DetailOpini from "../ELibraryPage/DetailOpini";

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
      <div className="m-1">
        {currentItems.map((opini) => {
          return (
            <Link
              key={opini.id}
              to={`opini/${opini.id}/${opini.judul.replaceAll(" ", "-")}`}
            >
              <hr />
              <article className="media box">
                <div className="media-content">
                  <div className="field">
                    <p className="has-text-left">
                      <strong className="is-size-7-mobile">
                        {opini.judul}
                      </strong>
                      <br />
                      <small className="is-size-7-mobile">
                        {moment(opini.createdAt).format("D MMMM YYYY")}
                      </small>
                    </p>
                  </div>
                </div>
                <figure className="media-right">
                  <img
                    src={opini.url}
                    className="image is-96x96"
                    style={{
                      borderRadius: "10%",
                    }}
                  />
                </figure>
              </article>
            </Link>
          );
        })}
      </div>
      <div className="is-flex is-align-items-center is-justify-content-center mt-6">
        <Link
          to={"/opini"}
          className="button is-normal is-rounded is-info is-centered"
        >
          lihat Lebih banyak
          <br />
          <span className="icon">
            <AiOutlineArrowRight />
          </span>
        </Link>
      </div>
      <Route path={`${path}/:id/:judul`}>
        <DetailOpini />
      </Route>
    </>
  );
}
