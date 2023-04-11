import React from "react";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";
import './style.css'

const BtnSlide = ({ direction, moveSlide }) => {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} alt="btn" />
        </button>
    )
};

export default BtnSlide;
