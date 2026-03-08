import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";

import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./shared/context/ThemeProvider";

import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import "./assets/styles/globals.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  </HelmetProvider>,
);
