import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "../src/auth/Register";
import Login from "../src/auth/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dungeon</h1>
        <Register />
        <Login />
      </header>
    </div>
  );
}

export default App;
