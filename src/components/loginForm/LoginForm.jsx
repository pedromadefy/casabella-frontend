import { useState } from "react";
import * as S from "./styles.js";

import Input from "../input/Input";
import Button from "../button/Button.jsx";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email : ", email);
    console.log("password : ", password);
  };
  return (
    <>
      <S.WelcomeMessage>
        <h3>Bem vindo novamente!</h3>
        <p>Informe seu usuário e senha para acessar</p>
      </S.WelcomeMessage>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          name="user"
          id="user"
          value={email}
        />

        <Input
          type="text"
          value={password}
          name="password"
          id="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <S.PasswordContent>
          <S.RememberPassword>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Lembrar senha</label>
          </S.RememberPassword>
     
            <a href="/lembrar-senha"> Esqueceu a senha ?</a>
      
        </S.PasswordContent>

        <Button type="submit">ENTRAR</Button>
      </form>
      <hr className="line" />
      Não tem conta ?{" "}
      <strong>
        <a href="/register">Cadastre-se!</a>
      </strong>
    </>
  );
}
