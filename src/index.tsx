import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import theme from "styles/material/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
