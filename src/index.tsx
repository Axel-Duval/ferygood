import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import data from "./data/fr.json";
import { Home } from "./pages/home";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export { data };