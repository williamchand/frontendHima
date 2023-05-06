import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const Foto = ({photo}) => {
    const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Card = styled.div`
//   width: 280px;
  height: 360px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  
  &:hover {
    transform: translateY(20px);
    
    &:before {
      opacity: 1;
    }
    
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(255, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }
  
  .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
    
    h1 {
      margin: 0px;
    }
    
    p {
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 8px;
    }
    
    button {
      padding: 0.6rem;
      outline: none;
      border: none;
      border-radius: 3px;
      background: white;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease;
      
      &:hover {
        background: dodgerblue;
        color: white;
      }
    }
  }
`;
    return (
        <div>
            <div
            className="has-text-left mt-6"
            style={{ borderLeft: "6px solid red" }}
            >
                <p className="is-size-6 pl-2 has-text-weight-bold">
                    Foto
                </p>
            </div>
            <hr/>
            <div className="columns is-3" >
                {
                photo.slice(0,3).map((e) => {
                    return (
                        <div className="column">
                            <Wrapper>
                                <Card>
                                    <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
                                    <div class="info">
                                        <h1>Mountain</h1>
                                        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                                    </div>
                                </Card>
                            </Wrapper>
                        </div>
                    )
                })
                }
            </div>
            <div>
                <Link
                to={"/"}
                className="button is-normal is-black is-centered mb-5"
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
        </div>
    )
}

export default Foto