import React, { useContext, useEffect, useState } from "react";
import { socket } from "../../App";
import "./CreateRoomPage.scss";
import { toast } from 'react-toastify';
import { Confirm } from "../../components/Confirm/Confirm";

export function CreatePage(props) {
    const [name, setName] = useState("");
    const [roomSet, setRoomSet] = useState(false);
    const [players, setPlayers] = useState([]);
    const [roomCode, setRoomCode] = useState("");
    const [playerNames, setPlayerNames] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        socket.on("roomCode", receiveRoomID);
        socket.on("playerUpdate", updatePlayers);
        console.log(socket);
    }, []);

    const updatePlayers = (names) => {
        console.log(names);
        setPlayerNames(names);
    }

    const destroyRoom = () => {
        console.log("loading 1");
        socket.emit("cancelRoom", roomCode);
        sessionStorage.removeItem("roomID");
        cancelCreateRoom();
    }

    const receiveRoomID = (roomID, myID) => {
        if (roomID === "") {
            toast.error("Failed to create a new room.")
            return
        }
        toast.success("Room Created!", { toastId: "create success" });
        setRoomCode(roomID);
        sessionStorage.setItem("roomID", roomID);
        sessionStorage.setItem("playerID", myID);
    }

    const cancelCreateRoom = () => {
        props.closePage();
        socket.off("roomCode");
        socket.off("playerUpdate");
    }

    const startGame = () => {
        socket.emit("startGame", roomCode);
    }

    return (
        <div id="create-page" className="fullCover">


            {roomCode !== "" ? <div className="lower-section">
                <h1 className="title-text">Room ID: {roomCode}</h1>
                <div className="playerList">
                    {playerNames.map((n) =>
                        <div className="player-box">
                            <p key={n.id}>{n.name}</p>
                        </div>
                    )}
                </div>
                <div>
                    <button onClick={() => setShowConfirm(true)} className="red">Cancel this room</button>
                    <button disabled={playerNames.length < 1} onClick={startGame}>Let's Rock!</button>
                </div>
                <Confirm
                    show={showConfirm}
                    clickYes={destroyRoom}
                    clickNo={() => setShowConfirm(false)}
                    title="Are you sure?"
                />
            </div> : <React.Fragment>
                <a className="close" onClick={cancelCreateRoom}>&times;</a>
                <div className="lower-section">
                    <h1 className="title-text">Create Game</h1>
                    <div className="input-container">
                        <input type="text" placeholder="Give yourself a name in the game" onChange={(event) => setName(event.target.value.trim())} />
                        <button disabled={name === ""} onClick={() => socket.emit("createRoom", name)}>Create Room</button>
                    </div>
                </div>
            </React.Fragment>}
        </div>
    )
}