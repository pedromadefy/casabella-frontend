import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5rem;
  width: 450px;

  input {
    width: 100% !important;
  }
`;

export const DateRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WelcomeMessage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 1.875rem;

`