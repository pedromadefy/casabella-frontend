import "./styles/global.css";

import GlobalStyle from "./styles/global";
import Router from "./routes";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
