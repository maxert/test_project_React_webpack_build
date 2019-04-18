import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Sectionone from "./sectionone";
import Sectiontwo from "./sectiontwo";
import Sectionthree from "./sectionthree";
import Header from "./header";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <Header />
    <Sectionone />
    <Sectiontwo />
    <Sectionthree />
  </>,
  document.getElementsByTagName("main")[0],
);

serviceWorker.unregister();
