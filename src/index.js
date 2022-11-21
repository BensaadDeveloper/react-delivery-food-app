import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);
