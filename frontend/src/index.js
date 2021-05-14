import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from "react";
import CssBaseline  from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from "./app";
import "./i18n";
import theme from './theme';
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback={null}>
        <App />
    </Suspense>
  </ThemeProvider>,
  document.getElementById("root")
);
