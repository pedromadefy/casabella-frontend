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
  width: 100%;
  justify-content: space-between;
  input {
    width: 100%;
    margin-right: 0.5rem;
  }
`;

export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1.875rem;
`;
export const CancelContent = styled.div`
  margin-top: 2rem;
`;
export const RangeSliderStepOne = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  margin-bottom: -4.2rem;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;

  outline: none; /* Remove outline */
  ::before {
    content: "";
    background:linear-gradient(90deg, rgba(230,78,51,1) 20%, rgba(208,209,213,1) 20%);
  ;
    width: 80%;
    height: 2px;

  
  }
`;
export const RangeSliderStepTwo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  margin-bottom: -4.2rem;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;

  outline: none; /* Remove outline */
  ::before {
    content: "";
    background:linear-gradient(90deg, rgba(230,78,51,1) 50%, rgba(208,209,213,1) 50%);
  ;
    width: 80%;
    height: 2px;

  
  }
`;
export const RangeSliderStepThree = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  margin-bottom: -4.2rem;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;

  outline: none; /* Remove outline */
  ::before {
    content: "";
    background:linear-gradient(90deg, rgba(230,78,51,1) 80%, rgba(208,209,213,1) 80%);
  ;
    width: 80%;
    height: 2px;

  
  }
`;
export const RangeSliderStepFour = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  margin-bottom: -4.2rem;
  justify-content: center;
  align-items: center;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;

  outline: none; /* Remove outline */
  ::before {
    content: "";
    background:linear-gradient(90deg, rgba(230,78,51,1) 100%, rgba(208,209,213,1) 0%);
  ;
    width: 80%;
    height: 2px;

  
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const SliderStep = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    margin: 2.6875rem;
    color: #fff;
    border: none;
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 50%;
    background-color: #e64e33;
  }
`;
