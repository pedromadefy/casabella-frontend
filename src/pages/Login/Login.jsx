import Input from "../../components/input/Input.jsx";
import * as S from "./styles.js";
export default function Login() {
  return (
    <>
      <S.LoginContainer>
        <S.LoginHalf>
          <img src="" alt="imagem bg" />
        </S.LoginHalf>

        <S.LoginHalf>
          <img src="" alt="" />
          <h3>Bem vindo novamente!</h3>
          <p>Informe seu usuário e senha para acessar</p>
          <S.FormContainer>
            <form action="">
              <Input type="text" placeholder="E-mail" />
              <Input type="text" placeholder="Senha" />
            </form>
          </S.FormContainer>
        </S.LoginHalf>
      </S.LoginContainer>
    </>
  );
}
