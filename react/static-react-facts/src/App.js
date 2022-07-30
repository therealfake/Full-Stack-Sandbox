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
      <div>
        {/* <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul> */}
      </div>
    </div>
  );
}

