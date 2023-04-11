import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { routes } from "./Router/RoutesUser";
import { routesAdmin } from "./Router/RoutesAdmin";

// import 'swiper/swiper.scss';

// import "swiper/swiper.scss";
// import "swiper/modules/navigation/navigation.scss";
// import "swiper/modules/thumbs/thumbs.scss";

const App = () => {
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  const routeUser = routes.map(({ path, component }, key) =>
    <Route exact path={path} component={component} key={key} />);
  const routeAdmin = routesAdmin.map(({ path, component }, key) =>
    <Route exact path={path} component={component} key={key} />);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {routeUser}
      {routeAdmin}
    </ThemeProvider >
  );
};

export default App;
