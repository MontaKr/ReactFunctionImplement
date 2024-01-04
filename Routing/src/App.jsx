import React from "react";
import { BrowserRouter } from "react-router-dom";
import RootRoute from "../routes/route";
import Nav from "../component/nav/Nav";
import { GlobalStyle } from "./globalCss";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <RootRoute />
    </BrowserRouter>
  );
};

export default App;
