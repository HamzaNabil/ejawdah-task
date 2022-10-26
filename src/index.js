import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import LangController from "./helpers/languageController";

import store from "./redux/store";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.scss";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LangController>
        <App />
      </LangController>
    </Provider>
  </React.StrictMode>
);
