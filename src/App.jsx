import React from "react";
import GlobalStyle from "./styles/global";

import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";

function App() {
  return (
    <>
      <Router>
        <Routes />

        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
