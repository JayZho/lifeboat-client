import { useState } from "react";
import { Card } from "../Handcards/Handcards";
import "./Profile.scss";
import { GiSwordBrandish, GiPaddles } from 'react-icons/gi';


export function Profile(props) {
    const [health, setHealth] = useState();
    const [hasRolled, setHasRolled] = useState(false);
    const [hasFought, setHasFought] = useState(false);

    const displayHealth = () => {
        const filled = [];
        for (let i = 0; i < health; i++) {
            filled.push()
        }
    }

    return (
        <div id="profile">
            <Card text={props.character} imgSrc={props.image} />
            <div className="right-box">
                <div className="vertical-half upper">
                    <h2>{props.playerName}</h2>
                    <GiSwordBrandish />
                    <GiPaddles />
                </div>
                <div className="vertical-half"></div>
            </div>
        </div>
    )
}