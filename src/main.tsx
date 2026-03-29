import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import ScrollToTop from "./components/helpers/ScrollToTop";
import "./index.css";
import "./theme.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
