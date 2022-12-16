import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home, Register,Terms, RememberPassword , LgpdTerms} from "../pages";


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/lgpdTerms" element={<LgpdTerms />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lembrar-senha" element={<RememberPassword />} />
    </Routes>
  );
}
