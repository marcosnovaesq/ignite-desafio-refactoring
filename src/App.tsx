import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
