import React, { useState } from "react";

import * as S from "./styles.js";
import logoOrange from "../../assets/imgs/logo-casabella-fragrancias-laranja-login.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  const [readyStepTwo, setReadyStepTwo] = useState(false);
  const [readyStepThree, setReadyStepThree] = useState(false);
  const [readyStepFour, setReadyStepFour] = useState(false);

  function handleValidateStepTwo() {
    if (name !== "") {
      setReadyStepTwo(true);
      setStep(2);
    } else {
      toast("Insira todos dados");
    }
  }

  function handleValidateStepThree() {
    setReadyStepTwo(true);
  }
  function handleValidateStepFour() {
    setReadyStepThree(true);
  }

  function handleStepTwo() {
    if (readyStepTwo) {
      setStep(2)
    }
  }
  function handleStepThree() {
    if (readyStepThree) {
    }
  }
  function handleStepFour() {
    if (readyStepFour) {
    }
  }

  return (
    <>
      {step === 1 ? (
        <S.Container>
          <img src={logoOrange} alt="logo" />
          <S.SliderContainer>
            <div>
              <S.RangeSliderStepOne>
                <div></div>
              </S.RangeSliderStepOne>

              <S.SliderStep>
                <button onClick={() => setStep(1)}>1</button>
                <button onClick={handleStepTwo}>2</button>
                <button onClick={handleStepThree}>3</button>
                <button onClick={handleStepFour}>4</button>
              </S.SliderStep>
            </div>
          </S.SliderContainer>
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
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.DateRow className="date-row">
                <Input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="CPF"
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
                onChange={(e) => setPhone(e.target.value)}
              />
            </form>

            <Button
              onClick={() => {
                handleValidateStepTwo();
              }}
            >
              Continuar
            </Button>
          </div>
          <S.CancelContent>Cancelar e voltar</S.CancelContent>
        </S.Container>
      ) : null}

      {step === 2 ? (
        <S.Container>
          <img src={logoOrange} alt="logo" />
          <S.SliderContainer>
            <div>
              <S.RangeSliderStepTwo>
                <div></div>
              </S.RangeSliderStepTwo>

              <S.SliderStep>
                <button onClick={() => setStep(1)}>1</button>
                <button onClick={handleStepTwo}>2</button>
                <button onClick={handleStepThree}>3</button>
                <button onClick={handleStepFour}>4</button>
              </S.SliderStep>
            </div>
          </S.SliderContainer>
          <S.WelcomeMessage>
            <h1>{name}, nos envie seu RG ou CNH...</h1>
            <p>Não se preocupe, é seguro e privado.</p>
          </S.WelcomeMessage>

          <div>
            <form>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.DateRow className="date-row">
                <Input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="CPF"
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
                onChange={(e) => setPhone(e.target.value)}
              />
            </form>

            <Button
              onClick={() => {
                handleValidateStepThree();
              }}
            >
              Continuar
            </Button>
          </div>
          <S.CancelContent>Cancelar e voltar</S.CancelContent>
        </S.Container>
      ) : null}

      {step === 3 ? (
        <S.Container>
          <img src={logoOrange} alt="logo" />
          <S.SliderContainer>
            <div>
              <S.RangeSliderStepThree>
                <div></div>
              </S.RangeSliderStepThree>

              <S.SliderStep>
                <button onClick={() => setStep(1)}>1</button>
                <button onClick={handleStepTwo}>2</button>
                <button onClick={handleStepThree}>3</button>
                <button onClick={handleStepFour}>4</button>
              </S.SliderStep>
            </div>
          </S.SliderContainer>
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
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.DateRow className="date-row">
                <Input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="CPF"
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
                onChange={(e) => setPhone(e.target.value)}
              />
            </form>

            <Button onClick={handleValidateStepFour()}>Continuar</Button>
          </div>
          <S.CancelContent>Cancelar e voltar</S.CancelContent>
        </S.Container>
      ) : null}

      {step === 4 ? (
        <S.Container>
          <img src={logoOrange} alt="logo" />
          <S.SliderContainer>
            <div>
              <S.RangeSliderStepFour>
                <div></div>
              </S.RangeSliderStepFour>

              <S.SliderStep>
                <button onClick={() => setStep(1)}>1</button>
                <button onClick={handleStepTwo}>2</button>
                <button onClick={handleStepThree}>3</button>
                <button onClick={handleStepFour}>4</button>
              </S.SliderStep>
            </div>
          </S.SliderContainer>
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
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <S.DateRow className="date-row">
                <Input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="CPF"
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
                onChange={(e) => setPhone(e.target.value)}
              />
            </form>

            <Button>Continuar</Button>
          </div>
          <S.CancelContent>Cancelar e voltar</S.CancelContent>
        </S.Container>
      ) : null}
      <ToastContainer />
    </>
  );
}
