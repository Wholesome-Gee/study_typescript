import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
// !를 추가하여 Typescript에게 root가 null이 무조건 아님을 알려줌.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
