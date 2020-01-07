import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "../src/auth/Register";
import Login from "../src/auth/Login";
import Routes from "./Routes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dungeon</h1>
        <Routes />
      </header>
    </div>
  );
}

export default App;
