import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Sectionone from "./sectionone";
import Sectiontwo from "./sectiontwo";
import Sectionthree from "./sectionthree";
import Header from "./header";

ReactDOM.render(
  <div className="wrapper">
    <Header />
    <Sectionone />
    <Sectiontwo />
    <Sectionthree />
  </div>,
  document.getElementsByTagName("main")[0],
);