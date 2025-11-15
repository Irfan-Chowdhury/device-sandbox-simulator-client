import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DeviceProvider } from "./context/DeviceContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DeviceProvider>
    <App />
  </DeviceProvider>
);
