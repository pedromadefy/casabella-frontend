import React, { useState } from "react";
import axios from "axios";

import * as S from "./styles.js";
import logoOrange from "../../assets/imgs/logo-casabella-fragrancias-laranja-login.png";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Navigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Login } from "../index.js";
import { cpfMask } from "../../components/masks/masks";
import { FaImages } from "react-icons/fa";
import { phone } from "../../components/masks/masks";
export default function Register() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [validFile, setValidFile] = useState(false);
  const [profileImage, setProfileImage] = useState(false);
  const [success, setSuccess] = useState(false);

  const REGISTER_URL = "/v1/register";
  if (success) {
    return <Navigate to="/" component={<Login />} />;
  }

  function handleValidateStepTwo() {
    if (name !== "") {
      setStep(2);
    } else {
      toast("Insira todos dados");
    }
  }

  function handleValidateStepThree() {
    if (validFile) {
      setStep(3);
    }
  }
  function handleValidateStepFour() {
    if (profileImage) {
      setStep(4);
    }
  }

  function handlePhone(e) {
    let value = e.currentTarget.value;
    e.currentTarget.maxLength = 15;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    e.currentTarget.value = value;
    return e;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          email: email,
          date: date,
          name: name,
          phone: phone,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        toast.error("Sem resposta do servidor");
      } else if (err.response?.status === 400) {
        toast.error("Verificar usuário e senha!");
      } else if (err.response?.status === 401) {
        toast.error("Não autorizado!");
        setSuccess(true);
      } else {
        toast.error("Login falhou!");
      }
    }
  };
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
                <button onClick={handleValidateStepTwo}>2</button>
                <button onClick={handleValidateStepThree}>3</button>
                <button onClick={handleValidateStepFour}>4</button>
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
                name="phone"
                id="phone"
                onKeyUp={handlePhone}
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
          <S.CancelContent>
            <button onClick={() => setSuccess(true)}>Cancelar e voltar</button>
          </S.CancelContent>
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
                <button onClick={handleValidateStepTwo}>2</button>
                <button onClick={handleValidateStepThree}>3</button>
                <button onClick={handleValidateStepFour}>4</button>
              </S.SliderStep>
            </div>
          </S.SliderContainer>
          <S.WelcomeMessage>
            <h1>{name}, nos envie seu RG ou CNH...</h1>
            <p>Não se preocupe, é seguro e privado.</p>
          </S.WelcomeMessage>

          <div>
            {!validFile ? (
              <S.ImageContainer>
                <img src="" alt="" />
                <h3>Selecionar arquivo</h3>
                <div>
                  <button onClick={() => setValidFile(true)}>
                    <p>Ou arraste e solte aqui.</p>
                  </button>
                </div>
              </S.ImageContainer>
            ) : (
              <S.ImageContainer>
                <img src="" alt="" />
                <h3>Arquivo selecionado</h3>
                <div>
                  <p>nome_do_arquivo.pdf</p>
                </div>
                <button onClick={() => setValidFile(false)}>Teste</button>
              </S.ImageContainer>
            )}

            <Button
              onClick={() => {
                handleValidateStepThree();
              }}
            >
              Continuar
            </Button>
          </div>
          <S.CancelContent>
            <button onClick={() => setSuccess(true)}>Cancelar e voltar</button>
          </S.CancelContent>
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
                <button onClick={handleValidateStepTwo}>2</button>
                <button onClick={handleValidateStepThree}>3</button>
                <button onClick={handleValidateStepFour}>4</button>
              </S.SliderStep>
            </div>
          </S.SliderContainer>
          <S.WelcomeMessage>
            <h1>{name}, estamos quase acabando...</h1>
            <p>Você pode alterar tudo depois.</p>
          </S.WelcomeMessage>

          <div>
            {!profileImage ? (
              <>
                <S.ProfileContainer>
                  <S.ButtonTransparent>
                    <button>
                      <FaImages />
                    </button>
                  </S.ButtonTransparent>
                </S.ProfileContainer>
                <S.Dflex>
                  <S.ButtonTransparent>
                    <button onClick={() => setProfileImage(true)}>
                      <p>Selecione a sua foto</p>
                    </button>
                  </S.ButtonTransparent>
                </S.Dflex>
              </>
            ) : (
              <>
                <S.ProfileContainer>
                  <img src="" alt="ProfileImg" />
                </S.ProfileContainer>
                <S.Dflex>
                  <S.ButtonTransparent>
                    <button onClick={() => setProfileImage(false)}>
                      <p>Remover imagem</p>
                    </button>
                  </S.ButtonTransparent>
                </S.Dflex>
              </>
            )}

            <Button
              onClick={() => {
                handleValidateStepFour();
              }}
            >
              Continuar
            </Button>
          </div>
          <S.CancelContent>
            <button onClick={() => setSuccess(true)}>Cancelar e voltar</button>
          </S.CancelContent>
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
                <button onClick={handleValidateStepTwo}>2</button>
                <button onClick={handleValidateStepThree}>3</button>
                <button onClick={handleValidateStepFour}>4</button>
              </S.SliderStep>
            </div>
          </S.SliderContainer>
          <S.VerifiedIconContainer>
            <div> Verified </div>
          </S.VerifiedIconContainer>
          <S.WelcomeMessage>
            <h1>Parabéns, {name}!</h1>
            <p>
              Você completou seu cadastro, logo te <br /> avisaremos quando
              puder acessar!
            </p>
          </S.WelcomeMessage>

          <div>
            <Button onClick={() => setSuccess(true)}>OBRIGADO</Button>
          </div>
          <S.CancelContent>
            <button onClick={() => setSuccess(true)}>Cancelar e voltar</button>
          </S.CancelContent>
        </S.Container>
      ) : null}
      <ToastContainer />
    </>
  );
}
