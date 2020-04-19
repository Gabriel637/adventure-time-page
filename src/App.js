import React from "react";
import { Global, Container } from "./styles/global";
import GlobalFonts from "./utils/fonts";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Global />
      <GlobalFonts />
      <Home />
    </>
  );
}

export default App;
