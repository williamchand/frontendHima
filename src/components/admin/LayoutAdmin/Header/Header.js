import React from "react";
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
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../../utils";

const Header = () => {
  const dispatch = useDispatch();

  const { menuOpen } = useSelector((state) => state.ui);

  const menuToggleHandler = () => {
    dispatch(uiActions.menuToggle());
  };
  const menuCloseHandler = () => {
    if (menuOpen) dispatch(uiActions.menuClose());
  };

  const history = useHistory();
  const Logout = async () => {
    try {
      await axios.delete(API_URL + "/logout");
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SHeaderHeight />
      <SHeaderFixed>
        <SHeader>
          <Sleft>
            <SLogoLink to="/dashboard" onClick={menuCloseHandler}>
              <SLogo src={Logo} />
            </SLogoLink>
          </Sleft>
          <SCenter>
            <Nav />
          </SCenter>
          <SRight>
            <SCTAButton onClick={Logout}>Logout</SCTAButton>
            <SMenuToggleButton onClick={menuToggleHandler}>
              {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
            </SMenuToggleButton>
          </SRight>
        </SHeader>
      </SHeaderFixed>
      <SMenu style={menuOpen ? { left: 0, zIndex: 1 } : {}}>
        <Nav menuToggleHandler={menuToggleHandler} />
      </SMenu>
    </>
  );
};

export default Header;
