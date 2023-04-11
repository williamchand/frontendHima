import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../utils/index.js";
import "./style.css";
import BtnSlide from "./BtnSlide";
import { Link } from "react-router-dom";

const SliderPage = () => {
  const [dataSlider, setDataSlider] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(API_URL + "/artikel");
    setDataSlider(res.data);
    // console.log(res.data);
  };

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  function Auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  useEffect(() => {
    if (autoScroll) {
      Auto();
    }
    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  useEffect(() => {
    setSlideIndex(1);
  }, []);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={index}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={obj.url} alt="slideimage" />
              <div className="slide-content">
                <Link
                  to={`berita/${dataSlider[slideIndex - 1].id}/${dataSlider[slideIndex - 1].judul
                    }`}
                >
                  <h1>{obj.judul}</h1>
                </Link>
              </div>
            </div>
          );
        })}
        <BtnSlide moveSlide={nextSlide} direction={"next"} />
        <BtnSlide moveSlide={prevSlide} direction={"prev"} />
      </div>
      <div className="container is-fullwidth is-flex overflowX">
        <div className="is-flex">
          {dataSlider.map((item, index) => (
            <div
              key={item.id}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderPage;
