import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components"; // npm i --save-dev @types/styled-components

const darkTheme = {
  textColor: "white",
  backgroundColor: "black",
};
const lightTheme = {
  textColor: "black",
  backgroundColor: "white",
};
const root = ReactDOM.createRoot(document.getElementById("root")!);
// !를 추가하여 Typescript에게 root가 null이 무조건 아님을 알려줌.

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
