import React, { useState } from "react";
import "./Handcards.scss";


export function Card(props) {
    return (
        <div className="panel-card">
            <img src={props.imgSrc}></img>
            <h2>{props.text}</h2>
        </div>
    )
}


export function Handcards(props) {
    const [handCards, setHandCards] = useState([{name: "Medi Box", url: "/medBox.png"}, {name: "Medi Box", url: "/medBox.png"}, {name: "Medi Box", url: "/medBox.png"}]);

    return (
        <div id="hand-cards">
            {handCards.map((card) => {
                return <Card text={card.name} imgSrc={card.url}/>
            })}
        </div>
    )
}