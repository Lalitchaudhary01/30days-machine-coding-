import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
// import Todo from "./components/Todo";
// import ProductSearch from "./components/Search";
import ColorPicker from "./components/ColorPicker";
import Password from "./components/Password";
import ToggleTheme from "./components/ToggleTheme";
import CounterLetter from "./components/CounterLetter";
import LiveClock from "./components/LiveClock";
import Greeting from "./components/Greeting";
import User from "./compo/User";
import Formvalidation from "./form/Formvalidation";
import ExapnadableFAQ from "./compo/ExapnadableFAQ";
import FetchApiData from "./API/FetchApiData";
import CryptoApi from "./API/CryptoApi";

function App() {
  // This is a simple counter app layout
  const [count, setCount] = useState(0);
  const counting = (event) => {
    setCount(event.target.value);
  };

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
      <CryptoApi />
    </>
  );
}

export default App;
