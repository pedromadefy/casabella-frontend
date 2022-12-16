import styled from "styled-components";

export const TermsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #eef1f8;
  height: 100vh;
  width: 100%;
`;
export const TermsContent = styled.div`

  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  overflow: scroll;
  overflow-x: hidden;

  border-radius: 7px;
  width: 60%;
  height: 600px;
  box-shadow: 10px 5px 5px #d0d1d5;

  p {
    height: 500px;
    padding: 2rem;
  }
  h1 {
    padding: 2rem;
  }
`;

export const AcceptDeclineButtons = styled.div`
   
    width: 60%;
    display: flex;
    justify-content: flex-end;
    
    button {
        width: 200px;
        height: 40px;
        border: 1px solid #707070;
        color:#fff;
        border-radius: 5px;
        border: none;
        background-color: #321D47;
        margin: .5rem;
        padding: 10px;
    }
`;
