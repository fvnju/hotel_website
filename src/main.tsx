import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import "./font.css";
import { BrowserRouter } from "react-router-dom";

//IMPORTING BOOTSTRAP 5
import "bootstrap/dist/css/bootstrap.min.css";
import WebRounting from "./WebRouting";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <WebRounting />
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
