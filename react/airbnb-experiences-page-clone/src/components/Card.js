import React from "react";

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={`./images/${props.item.coverImg}`} className="card-image" />
            <div className="stats">
                <img src="./images/star.png" alt="star icon" className="star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><b>From ${props.item.price}</b></p>
        </div>
    )
}