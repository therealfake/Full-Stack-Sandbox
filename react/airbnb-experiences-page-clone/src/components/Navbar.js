import React from "react";
import airbnbLogo from "../assets/images/airbnb-logo.png"

export default function NavBar() {
    return (
        <nav>
            <img src={airbnbLogo} alt="airbnb logo" className="logo"/>
        </nav>
    )
}