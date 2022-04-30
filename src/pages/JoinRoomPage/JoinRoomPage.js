import React, { useEffect, useState } from "react";
import "../CreateRoomPage/CreateRoomPage.scss";
import { socket } from "../../App";
import { toast } from 'react-toastify';

export function JoinPage(props) {
    const [roomID, setRoomID] = useState("");
    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);
    const [joined, setJoined] = useState(false);

    useEffect(() => {
        socket.on("roomCode", joinRoom);
        socket.on("playerUpdate", updatePlayers);
    }, [])

    const updatePlayers = (players) => {
        setPlayers(players);
    }

    const joinRoom = (roomID) => {
        if (roomID === "") {
            toast.error("Invalid Room ID");
        } else {
            toast.success("Room joined successfully!");
            setRoomID(roomID);
            setJoined(true);
        }
    }

    const cancelJoinRoom = () => {
        socket.off("roomCode");
        socket.off("playerUpdate");
        props.closePage();
    }

    return (
        <div className="fullCover" id="join-page">
            <a className="close" onClick={cancelJoinRoom}>&times;</a>

            {joined ? (
                <div className="lower-section">
                    <h1 className="title-text">Room ID: {roomID}</h1>
                    <div className="playerList">
                        {players.map((n) => <p key={n.ID}>{n.NAME}</p>)}
                    </div>
                    <button className="red">Leave Room</button>
                </div>
            ) : (
                <div className="lower-section">
                    <h1 className="title-text">Join Game</h1>
                        <input onChange={(event) => setRoomID(event.target.value.trim())} type="text" placeholder="Enter your room ID" />
                        <input onChange={(event) => setName(event.target.value.trim())} type="text" placeholder="Give yourself a name in the game" />
                        <button disabled={name === "" || roomID.length !== 5} onClick={() => socket.emit("joinRoom", name, roomID)}>Create Room</button>
                </div>

            )}
        </div >
    )
}