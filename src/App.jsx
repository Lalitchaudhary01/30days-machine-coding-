import React from "react";
import "./App.css";
import Navar from "./components/Navar";
import Hero from "./components/Hero";
import Habits from "./components/Habits";

function App() {
  // This is a simple counter app layout

  return (
    <>
      <Navar />
      <Hero />
      <Habits />
    </>
  );
}

export default App;
