import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home } from "../pages";
import Register from "../pages/Register/Register";
import RememberPassword from "../pages/RememberPassword/RememberPassword";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lembrar-senha" element={<RememberPassword />} />
    </Routes>
  );
}
