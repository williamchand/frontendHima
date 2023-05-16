import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "bulma/css/bulma.css";
import "video-react/dist/video-react.css";
import "react-datepicker/dist/react-datepicker.css";
import { hydrate, render } from "react-dom";
import axios from "axios";
// axios.defaults.withCredentials = true;

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
} else {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
}
