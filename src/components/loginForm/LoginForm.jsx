import { Navigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "../../services/api";
import { useRef, useEffect, useContext, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import * as S from "./styles.js";
import Input from "../input/Input";
import Button from "../button/Button.jsx";
import { Home } from "../../pages";
import Modal from "react-modal";
import MyModal from "../modal/MyModal";

const LOGIN_URL = "/v1/login";
const RETRIEVE_URL = "/v1/forgot-password";

Modal.setAppElement("#root");

export default function LoginForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const [retrieveEmail, setRetrieveEmail] = useState("");

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  if (success) {
    return <Navigate to="/home" component={<Home />} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ user, pwd, roles, accessToken });

      setUser("");
      setPwd("");
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
      errRef.current.focus();
    }

    console.log("User : ", user);
    console.log("Pwd : ", pwd);
  };

  const onSendRetrievePass = async (e) => {
    e.preventDefault();
    console.log(retrieveEmail);
    try {
      const response = await axios.post(
        RETRIEVE_URL,
        JSON.stringify({ email: retrieveEmail }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setRetrieveEmail("");

      setIsModalOpen(false);
    } catch (err) {
      if (!retrieveEmail) {
        toast.error("Insira um e-mail valido!");
      } else {
        toast.error("Recuperação falhou!");
      }
      errRef.current.focus();
    }
  };
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <>
        {isModalOpen ? (
          <MyModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            title="Problemas para entrar?"
            InputPlaceHolder="E-mail"
            InputValue={retrieveEmail}
            onInputChange={(e) => setRetrieveEmail(e.target.value)}
            onSendClick={onSendRetrievePass}
            buttonContext="Enviar link para redefinir"
            footerTip="Não conseguiu redefinir sua senha ?"
            content="Insira o seu e-mail e enviaremos um link para você voltar a acessar a sua conta novamente"
          />
        ) : null}
      </>
      <S.WelcomeMessage>
        <h3>Bem vindo novamente!</h3>
        <p>Informe seu usuário e senha para acessar</p>
      </S.WelcomeMessage>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      {success ? <p>Logado com sucesso, alterar para rota </p> : null}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          placeholder="E-mail"
          id="user"
          ref={userRef}
          autoComplete="off"
          value={user}
          required
        />

        <Input
          type="password"
          id="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Senha"
          required
        />

        <S.PasswordContent>
          <S.RememberPassword>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Lembrar senha</label>
          </S.RememberPassword>
          <S.BtnAlert>
            <button
              className="btn-alert"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              <p>Esqueceu a senha ?</p>
            </button>
          </S.BtnAlert>
        </S.PasswordContent>

        <Button>ENTRAR</Button>
      </form>
      <hr className="line" />
      {""} Não tem conta ?
      <strong>
        <a href="/register"> Cadastre-se!</a>
      </strong>
      <ToastContainer />
    </>
  );
}
