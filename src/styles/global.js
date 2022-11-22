import { createGlobalStyle } from 'styled-components';
import { colors } from '../assets/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;

    //Firefox
    scrollbar-width: thin;
    scrollbar-color: ${colors.darkGrey} ${colors.grey};

    //Chrome, edge, safari
    ::-webkit-scrollbar {
      width: 8px;
      background: ${colors.grey};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${colors.darkGrey};
      width: 10px;
    } 
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

  .custom-scroll{
    // Firefox
    scrollbar-color: ${colors.buttons.primary} transparent;

    ::-webkit-scrollbar {
      width: 8px;
      background: none;
    }
  
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${colors.buttons.primary};
      width: 5px;
    }
  }

   .custom-scroll-dark{
      // Firefox
      scrollbar-color: rgba(46, 50, 51, 0.5) transparent;
 
    ::-webkit-scrollbar {
      width: 8px;
      background: none;
    }
  
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(46, 50, 51, 0.5);
      width: 10px;
    }
  }

  .DatePicker{
    z-index: 5;
  }
`;
