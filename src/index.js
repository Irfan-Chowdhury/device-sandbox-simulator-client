import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DeviceProvider } from "./context/DeviceContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DeviceProvider>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </DeviceProvider>
);
