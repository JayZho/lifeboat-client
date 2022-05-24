import React, { useEffect, useState } from "react";
import { CreatePage } from "../CreateRoomPage/CreateRoomPage";
import { JoinPage } from "../JoinRoomPage/JoinRoomPage";
import "./IntroPage.scss";
import { socket } from "../../App";
import { ShowSetup } from "../../components/ShowSetup/ShowSetup";

export function IntroPage(props) {
    const [intro, setIntro] = useState(true);
    const [isCreateRoom, setIsCreateRoom] = useState(true);
    const [gameSetup, setGameSetup] = useState(null);

    useEffect(() => {
        socket.on("playersInit", (players) => {
            socket.off("playersInit");
            setGameSetup(players);
            // props.startGame();
        });
    }, []);

    const createGame = () => {
        setIntro(false);
        setIsCreateRoom(true);
    }

    const joinGame = () => {
        setIntro(false);
        setIsCreateRoom(false);
    }

    const back = () => {
        setIntro(true);
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
            gameSetup ?
                <ShowSetup players={gameSetup} /> :
                (isCreateRoom ?
                    <CreatePage closePage={back} /> :
                    <JoinPage closePage={back} />
                )
        )
    )
}