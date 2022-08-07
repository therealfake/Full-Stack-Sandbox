import React from "react";
import grid from "../assets/images/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={grid} alt="grid of experiences" className="photo"/>
            <h1 className="header">Online Experiences</h1>
            <p className="text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}