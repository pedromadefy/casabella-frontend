import { createGlobalStyle } from "styled-components";
import { colors } from "../assets/colors";

export default createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif
  
}
p {
  color: ${colors.textSecondary};
}
h1,h2,h3,h4 {
  
  color: ${colors.textPrimary};
}

      @media (max-width: 1720px) {
        html {
          font-size: 80%;
        }
      }

      @media (max-width: 1350px) {
        html {
          font-size: 70%;
        }
      }

      @media (max-width: 1025px) {
        html {
          font-size: 65%;
        }
      }

      @media (max-width: 960px) {
        html {
          font-size: 60%;
        }
      }

      @media (max-width: 480px) {
        html {
          font-size: 50%;
        }
      }

  body {
    color: ${colors.textSecondary};
    background: ${colors.background};
    letter-spacing: .02em;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button, input, textarea{
    :disabled {
      cursor: not-allowed !important;
    }
  }

  button {
    cursor: pointer !important;
    text-align: center !important;
  }

    
`;
