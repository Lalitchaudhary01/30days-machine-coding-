import React, { useState } from "react";
import "./App.css";
import Counter from "./assets/compo/Counter";
// import Todo from "./components/Todo";
// import ProductSearch from "./components/Search";
import ColorPicker from "./assets/compo/ColorPicker";
import Password from "./assets/compo/Password";
import ToggleTheme from "./assets/compo/ToggleTheme";
import CounterLetter from "./assets/compo/CounterLetter";
import LiveClock from "./assets/compo/LiveClock";
import Greeting from "./assets/compo/Greeting";
import User from "./assets/compo/User";
import Formvalidation from "./assets/form/Formvalidation";
import ExapnadableFAQ from "./assets/compo/ExapnadableFAQ";
import FetchApiData from "./assets/API/FetchApiData";
import CryptoApi from "./assets/API/CryptoApi";

import Movies from "./assets/API/Movies";

function App() {
  // This is a simple counter app layout

  return (
    <>
      {/* <Counter /> */}
      {/* <Todo/> */}
      {/* <ProductSearch /> */}
      {/* <ColorPicker /> */}
      {/* <Password/> */}
      {/* <ToggleTheme/> */}
      {/* <CounterLetter /> */}
      {/* <LiveClock /> */}
      {/* <Greeting /> */}
      {/* <User /> */}
      {/* <Formvalidation /> */}
      {/* <ExapnadableFAQ /> */}
      {/* <FetchApiData/> */}
      {/* <CryptoApi /> */}
      {/* <ProductList /> */}
      <Movies />
    </>
  );
}

export default App;
