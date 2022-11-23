import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;

  flex-direction: row !important;
  justify-content: space-between !important;
  height: 100vh;

  justify-content: center;
  align-items: center;
  flex-direction: column;

   
`;

export const ImageContent = styled.div`
  height: 100%;
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  width: 50%;
  justify-content: space-between;

  position: relative;
  align-items: center;

  & > * {
    width: 100%;
  }
`;
export const Logo = styled.div`
  margin-bottom: 2rem;
  img {
    width: 20%;
    height: 20%;
  }
`;

export const LoginForm = styled.div`
  width: 100%;
  height: 100%;

  a,
  p,
  span {
    font-size: 14px;
    text-decoration: none;
  }
  a {
    color: #dd1650;
  }

  hr {
    color: #d0d1d5;
    width: 40%;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
