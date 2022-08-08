import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="badge">SOLD OUT</div>}
            <img src={props.img} className="card-image" />
            <div className="stats">
                <img src="./images/star.png" alt="star icon" className="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b></p>
        </div>
    )
}