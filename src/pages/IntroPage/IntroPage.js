import React, { useState } from "react";
import { CreatePage } from "../CreateRoomPage/CreateRoomPage";
import { JoinPage } from "../JoinRoomPage/JoinRoomPage";
import { Test } from "../Test/Test";
import "./IntroPage.scss";


export function IntroPage(props) {
    const [intro, setIntro] = useState(true);
    const [isCreateRoom, setIsCreateRoom] = useState(true);

    const createGame = () => {
        setIntro(false);
        setIsCreateRoom(true);
    }

    const joinGame = () => {
        setIntro(false);
        setIsCreateRoom(false);
    }

    return (
        intro ? (
            <React.Fragment>
                <h1 id="lifeboat-title" className="title-text">Lifeboat</h1>
                <div id="intro-buttons">
                    <button className="white" onClick={createGame}>Create Game</button>
                    <button className="white" onClick={joinGame}>Join Game</button>
                </div>
            </React.Fragment>
        ) : (
            // <Test />
            isCreateRoom ? <CreatePage closePage={() => setIntro(true)} /> : <JoinPage closePage={() => setIntro(true)} />
        )
    )
}