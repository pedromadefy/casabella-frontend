import React from "react";
import { Route, Routes, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
