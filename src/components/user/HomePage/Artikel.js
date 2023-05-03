import { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import DetailArtikel from "../ELibraryPage/DetailArtikel";
import { AiOutlineArrowRight } from "react-icons/ai";
import moment from "moment/moment";

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
const nyoba = [
    {
      id: 1,
      judul: "Persis Hima judul akjsdbaiusasdasdasdad",
      createdAt: "12-12-2022",
      url: "https://himapersisjakarta.org/wp-content/uploads/2022/12/Hima-Persis-DKI-Jakarta.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis mauris"
    },
    {
      id: 1,
      judul: "Persis Hima judul 2",
      createdAt: "12-12-2022",
      url: "https://himapersisjakarta.org/wp-content/uploads/2022/12/Hima-Persis-DKI-Jakarta.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis mauris"
    },
    {
      id: 1,
      judul: "Persis Hima judul 3",
      createdAt: "12-12-2022",
      url: "https://himapersisjakarta.org/wp-content/uploads/2022/12/Hima-Persis-DKI-Jakarta.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis mauris"
    },
    {
      id: 1,
      judul: "Persis Hima judul 4",
      createdAt: "12-12-2022",
      url: "https://himapersisjakarta.org/wp-content/uploads/2022/12/Hima-Persis-DKI-Jakarta.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis mauris"
    },
    {
      id: 1,
      judul: "Persis Hima judul 5",
      createdAt: "12-12-2022",
      url: "https://himapersisjakarta.org/wp-content/uploads/2022/12/Hima-Persis-DKI-Jakarta.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis maurisLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis maurishasellus nec iaculis maurishasellus nec iaculis mauris"
    }
  ]
  return (
    <>
      <div className="m-1">
        {nyoba.map((artikel) => {
          return (
            <Link
              className=""
              key={artikel.id}
              to={`berita/${artikel.id}/${artikel.judul.replaceAll(" ", "-")}`}
            >
              <hr />
              <article className="media box">
                <div className="media-content">
                  <div className="field">
                    <p className="has-text-left">
                      <strong className="is-size-7-mobile">
                        {artikel.judul}
                      </strong>
                      <br />
                      <small className="is-size-7-mobile">
                        {moment(artikel.createdAt).format("D MMMM YYYY")}
                      </small>
                    </p>
                  </div>
                </div>
                <figure className="media-right">
                  <img
                    src={artikel.url}
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
          to={"/berita"}
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
        <DetailArtikel />
      </Route>
    </>
  );
}
