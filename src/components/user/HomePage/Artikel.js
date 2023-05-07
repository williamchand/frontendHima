import { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import DetailArtikel from "../ELibraryPage/DetailArtikel";
import { AiOutlineArrowRight } from "react-icons/ai";
import moment from "moment/moment";
import styled from "styled-components";

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
      judul: "bagas",
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

  const MyElement = styled.div`
  // position: relative;
  z-index: 11;
    transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.04);
  z-index: 11;
  }
`;

  return (
    <>
      <div className="columns" >
        {nyoba.slice(0,3).map((artikel) => {
          return (
            <Link
              className="column"
              // style={{zIndex:-1,position:'relative'}}
              key={artikel.id}
              to={`berita/${artikel.id}/${artikel.judul.replaceAll(" ", "-")}`}
            >
              <MyElement>
              <div class="column card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src={artikel.url} alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                <div className="is-size-7 mb-3">{moment(artikel.createdAt).format("D MMMM YYYY")}</div>
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">{
                        (artikel.judul.length > 20) ?
                          `${artikel.judul.slice(0,20)}...` :
                          artikel.judul
                      }</p>
                    </div>
                  </div>

                  <div class="content ">
                    {
                      (artikel.description.length > 190) ?
                      `${artikel.description.slice(0,190)}...` :
                      artikel.description
                    }
                  </div>
                </div>
              </div>
              </MyElement>
            </Link>
          );
        })}
      </div>
      <div className="is-flex is-align-items-start mt-6">
        <Link
          to={"/berita"}
          className="button is-normal is-black is-centered"
          style={{
            borderRadius:'0px'
          }}
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
