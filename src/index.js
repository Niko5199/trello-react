import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import TodoApp from "./TodoApp";
import "./TodoApp.css";

const divRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(divRoot);

root.render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
