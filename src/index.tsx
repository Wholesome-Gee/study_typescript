import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root")!);
// !를 추가하여 Typescript에게 root가 null이 무조건 아님을 알려줌. - chatGPT

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
