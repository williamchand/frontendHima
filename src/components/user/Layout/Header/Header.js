import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../../app/slices/uiSlice";
import {
  SCenter,
  SCloseIcon,
  SCTAButton,
  SHeader,
  SHeaderFixed,
  SHeaderHeight,
  Sleft,
  SLogo,
  SLogoLink,
  SMenu,
  SMenuIcon,
  SMenuToggleButton,
  SRight,
} from "./styles";
import Logo from "../../../../images/logoHimaPersis.png";
import Nav from "./Nav/Nav";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../../../../utils";
import Artikel from "../../HomePage/Artikel";

const Header = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);

  const [collapsed, setCollapsed] = useState(true);
  const [modal, setModal] = useState(true);
  const [artikel, setArtikel] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getArtikel();
  }, [keyword]);

  const handleToggle = () => {
    setCollapsed((value) => !value);
  };

  const handleModal = () => {
    setModal((value) => !value);
  };

  const menuToggleHandler = () => {
    dispatch(uiActions.menuToggle());
  };

  const menuCloseHandler = () => {
    if (menuOpen) dispatch(uiActions.menuClose());
  };

  const getArtikel = async () => {
    try {
      const response = await axios.get(API_URL + `/artikel?search=${keyword}`);
      setArtikel(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const search = (e) => {
    e.preventDefault();
    setKeyword(query);
    setQuery("");
  };

  return (
    <>
      <SHeaderHeight />
      <SHeaderFixed>
        <SHeader>
          <Sleft>
            <SLogoLink to="/" onClick={menuCloseHandler}>
              <SLogo src={Logo} />
            </SLogoLink>
          </Sleft>
          <SCenter>
            <SCTAButton>
              <Nav />
            </SCTAButton>
            <SMenuToggleButton onClick={menuToggleHandler}>
              {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
            </SMenuToggleButton>
          </SCenter>
          <SRight>
            <div
              className={`dropdown ${collapsed ? "" : "is-active is-right"}`}
              onBlur={() => handleToggle()}
            >
              <div className="dropdown-trigger">
                <FaSearch
                  className="icon is-normal"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                  onClick={() => handleToggle()}
                />
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div
                  className="dropdown-content"
                  style={{
                    marginTop: "13px",
                    width: "100%",
                  }}
                >
                  <div className="dropdown-item">
                    <form onSubmit={search}>
                      <div className="field has-addons">
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Cari Disini ..."
                            style={{ width: "300px" }}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                          />
                        </div>
                        <div className="control">
                          <button
                            className="button"
                            type="submit"
                            onClick={() => handleModal()}
                          >
                            <FaSearch />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </SRight>
        </SHeader>
      </SHeaderFixed>
      <SMenu style={menuOpen ? { left: 0, zIndex: 1 } : {}}>
        <Nav menuToggleHandler={menuToggleHandler} />
      </SMenu>
      <div
        className={`modal ${modal ? "" : "is-active"}`}
        onClick={() => handleModal()}
      >
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Hasil Pencarian ...</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            {msg ? (
              <h1 className="notification is-danger is-light">{msg}</h1>
            ) : (
              <Artikel data={artikel} />
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
