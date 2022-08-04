import React from "react"
import ReactDOM from "react-dom"
import './App.scss';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import reactLogo from "./images/react-icon.png"

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

