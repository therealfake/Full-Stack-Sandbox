import React from "react";
import trollFace from "../assets/images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="troll face" className="header-image"/>
            <h2 className="header-title">Meme Generator</h2>
        </header>
    )
}