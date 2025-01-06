import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./store/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
// import axios from "axios";
// axios.defaults.baseURL = process.env.BACKEND_URI;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
