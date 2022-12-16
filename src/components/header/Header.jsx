import imgLogo from "../../assets/imgs/logo-casabella-fragrancias-logado.png";
import React, { useState } from "react";
import { useContext } from "react";
import * as S from "./styles.js";
import Input from "../../components/input/Input";
import { NavigationMenu } from "../navigationMenu/NavigationMenu";
import { Navigate } from "react-router";
import { Login } from "../../pages";
import AuthContext from "../../context/AuthProvider";

export default function Header() {
  const { setAuth } = useContext(AuthContext);
  const [exit, setExit] = useState(false);
  const [missingTerms, setMissingTerms] = useState(true);

  if (exit) {
    return <Navigate to="/" component={<Login />} />;
  }
  function handleExit() {
    setExit(true);
  }

  return (
    <S.HeaderContainer>
      <div>
        <img src={imgLogo} alt="logo" />
      </div>
      <NavigationMenu />
      <Input />
      <div></div>
      <button onClick={handleExit}>+</button>
      <div>Profile</div>
    </S.HeaderContainer>
  );
}
