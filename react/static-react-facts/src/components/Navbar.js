import React from "react"
import reactLogo from "../images/react-icon.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} alt="" className="nav-icon"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Project</h4>
        </nav>
    )
}