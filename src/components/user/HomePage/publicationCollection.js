import React from "react";
import styled from "styled-components";

import logo1 from '../../../images/book-solid.svg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Publication = () => {
    const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  height: 200px;
//   width: 100%;

  grid {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    // padding: 15px;
    // align-items: center;
    // justify-content: center;
    // font-size: 2rem;
    // transition: all 0.2s ease;
  }
`;

const H3 = styled.h3`
  color: #262626;
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const P = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;

  &.small {
    font-size: 14px;
  }
`;

const GoCorner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 32px;
`;

const GoArrow = styled.div`
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
`;

const Card3 = styled.div`
    transition: all 0.3s ease-out;
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
//   margin: 12px;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #f2f8f9;

  ${GoCorner} {
    opacity: 0.7;
  }

  &:hover {
    border: 1px solid #00838d;
    box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
    z-index: 500;
  }
`;

const Card3Hover = styled(Card3)`
  &:hover {
    ${P} {
      color: #00838d;
    }

    ${GoCorner} {
      transition: opactiy 0.3s linear;
      opacity: 1;
    }
  }
`;
    return (
        <div className="my-6">
                        <div
            className="has-text-left mt-6"
            style={{ borderLeft: "6px solid red" }}
            >
                <p className="is-size-6 pl-2 has-text-weight-bold">
                    Publikasi
                </p>
            </div>
            <hr/>
            <div className="columns">
                <div className="column px-6 has-background-white is-one-third">
                    <h1 className="is-size-2" >Publikasi Hima</h1>
                    <p>Pelaksanaan publikasi merupakan salah satu kegiatan utama kami</p>
                </div>
                <div className="column">
                    <GridContainer>
                        <grid className="is-flex is-flex-direction-column">
                        <Link to="/buku">
                            <Card3Hover>
                                <H3>Buku</H3>
                                <P>Publikasi Buku</P>
                                <GoCorner>
                                <GoArrow>→</GoArrow>
                                </GoCorner>
                            </Card3Hover>
                        </Link>
                        </grid>
                        <grid className="is-flex is-flex-direction-column">
                        <Link to="/jurnal">
                            <Card3Hover>
                                <H3>Jurnal</H3>
                                <P>Publikasi Jurnal</P>
                                <GoCorner>
                                <GoArrow>→</GoArrow>
                                </GoCorner>
                            </Card3Hover>
                        </Link>
                        </grid>
                        <grid className="is-flex is-flex-direction-column">
                        <Link to="/berita">
                            <Card3Hover>
                                <H3>Berita</H3>
                                <P>Publikasi Berita</P>
                                <GoCorner>
                                <GoArrow>→</GoArrow>
                                </GoCorner>
                            </Card3Hover>
                        </Link>
                        </grid>
                        <grid className="is-flex is-flex-direction-column">
                        <Link to="/buku">
                            <Card3Hover>
                                <H3>Opini</H3>
                                <P>Publikasi Opini</P>
                                <GoCorner>
                                <GoArrow>→</GoArrow>
                                </GoCorner>
                            </Card3Hover>
                        </Link>
                        </grid>
                    </GridContainer>
                </div>
            </div>
        </div>
    )
}

export default Publication