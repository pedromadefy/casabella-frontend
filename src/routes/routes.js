import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home, Register, RememberPassword } from "../pages";


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lembrar-senha" element={<RememberPassword />} />
    </Routes>
  );
}
