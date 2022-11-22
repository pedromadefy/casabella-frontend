import GlobalStyle from "./styles/global";

import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Login, Home } from "./pages/index";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
          <GlobalStyle />
        </div>
      </Router>
    </>
  );
}

export default App;
