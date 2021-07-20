import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FruitMachine } from "./FruitMachine";

function App() {
  return (
    <div className='App'>
      <h1>Fruit Machine</h1>
      <p>Play: £1.00</p>
      <FruitMachine />
    </div>
  );
}

export default App;
