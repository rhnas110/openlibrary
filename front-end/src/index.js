import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//framework
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-loading-skeleton/dist/skeleton.css'

//import tambahan
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
// end of redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
