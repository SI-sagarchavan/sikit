import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@acme/ui/styles.css";

import * as React from "react"
import * as ReactDOM from "react-dom"

window.React = React
window.ReactDOM = ReactDOM


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
