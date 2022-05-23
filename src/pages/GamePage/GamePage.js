import React from "react";
import {Handcards} from "../../components/Handcards/Handcards";
import {Profile} from "../../components/Profile/Profile";

export function GamePage(props) {
    return (
        <React.Fragment>
            <Handcards />
            <Profile character="Captain" image="/captain.png" playerName="Jay" />
        </React.Fragment>
    )
}