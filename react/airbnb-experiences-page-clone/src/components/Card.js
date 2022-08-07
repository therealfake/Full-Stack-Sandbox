import React from "react";
import katieCard from "../assets/images/katie-zaferes.png"
import starIcon from "../assets/images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={katieCard} alt="katie-zaferes" className="card-image" />
            <div className="stats">
                <img src={starIcon} alt="star icon" className="star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray"> USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><b>From $136</b></p>
        </div>
    )
}