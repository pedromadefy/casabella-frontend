import React, { useState } from "react";
import Stepper from "../../components/stepper/Stepper";
import * as S from "./styles.js";
import logoOrange from "../../assets/imgs/logo-casabella-fragrancias-laranja-login.png";
import Input from "../../components/input/Input";
import Button from '../../components/button/Button'

export default function Register() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <S.Container>
      <img src={logoOrange} alt="logo" />

      <Stepper />
      <S.WelcomeMessage>
        <h1>Bem vindo, antes de tudo...</h1>
        <p>Você pode alterar tudo depois.</p>
      </S.WelcomeMessage>

      <div>
        <form action="">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.DateRow className="date-row">
            <Input
              type="text"
              name="cpf"
              id="cpf"
              placeholder="Nome"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <Input
              type="text"
              name="date"
              id="date"
              placeholder="Data de Nascimento"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </S.DateRow>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            name="date"
            id="date"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setDate(e.target.value)}
          />
        </form>

        <Button>Continuar</Button>
      </div>

      
    </S.Container>
  );
}
