require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Styles/App.scss";

const container = document.getElementById("app");
const root = createRoot(container);
var config = { CustomerNumber: "0999" };
root.render(<App id="app" config={config} />);
