import * as S from "./styles.js";
import imgBG from "../../assets/imgs/bg-pexels.jpg";
import imgLogo from "../../assets/imgs/logo-casabella-fragrancias.png";

import LoginForm from "../../components/loginForm/LoginForm";
export default function Login() {
  return (
    <>
      <S.LoginWrapper>
        <S.ImageContent>
          <img src={imgBG} />
        </S.ImageContent>
        <S.LoginContent>
          <S.Logo>
            <img src={imgLogo} alt="" />
          </S.Logo>
          <S.LoginForm>
            <LoginForm />
          </S.LoginForm>
        </S.LoginContent>
      </S.LoginWrapper>
    </>
  );
}
