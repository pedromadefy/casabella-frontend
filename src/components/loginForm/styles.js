import styled from "styled-components";

export const PasswordContent = styled.div`
  display: flex;
  text-align: center;
  margin: 0 auto;
  width: 22.1875rem;
  justify-content: space-between;

  position: relative;
  align-items: center;
  label {
    font-size: 1rem;
  }
  span {
    font-size: 1rem;
  }

  & > * {
    width: 100%;
    /* max-width: 36rem; */
  }
`;

export const RememberPassword = styled.div`
  display: flex;
  justify-content: left;

  input {
    display: none;
    margin-right: 0.5rem;
  }
  input + label:before {
    content: "";
    width: 1.1875rem;
    height: 1.1875rem;
    border-radius: 4px;
    background-color: white;
    border: 1px solid gray;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 3px;
  }
  input:checked + label:before {
    background-color: #dd1650;
    padding: 1px;
    border: none;
    content: "✓";

    color: white;
  }
`;
export const WelcomeMessage = styled.div`
  width: 100%;
  h3 {
    font-weight: bold;
    white-space: nowrap;
    font-size: 20px;
    margin-bottom: 1.5625rem;
  }
  p {
    font-size: 16px;
    white-space: nowrap;
    color: #6f6d79;
    margin-bottom: 2.5rem;
  }
`;

export const BtnAlert = styled.div`
  button {
    border: none;
    background: transparent;
  }
  p {
    color: #dd1650;
    font-size: 16px;
  }
`;
 
