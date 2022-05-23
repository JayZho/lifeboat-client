import React, { useEffect, useState } from "react";
import "../CreateRoomPage/CreateRoomPage.scss";
import { socket } from "../../App";
import { toast } from 'react-toastify';
import { Confirm } from "../../components/Confirm/Confirm";

export function JoinPage(props) {
    const [roomID, setRoomID] = useState("");
    const [name, setName] = useState("");
    const [players, setPlayers] = useState([]);
    const [joined, setJoined] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        socket.on("roomCode", joinRoom);
        socket.on("playerUpdate", updatePlayers);
        socket.on("roomDeleted", () => leaveRoom(false));
    }, [])

    const updatePlayers = (players) => {
        setPlayers(players);
    }

    const joinRoom = (roomID, playerID) => {
        if (roomID === "") {
            toast.error("Invalid Room ID", { toastId: "join error" });
        } else if (roomID === "max") {
            toast.warning("Room is already full!", { toastId: "room full" });
        } else {
            toast.success("Room joined successfully!", { toastId: "join success" });
            setRoomID(roomID);
            sessionStorage.setItem("playerID", playerID);
            setJoined(true);
        }
    }

    const leaveRoom = (voluntray) => {
        const id = sessionStorage.getItem("playerID");
        sessionStorage.removeItem("playerID");

        if (voluntray) {
            socket.emit("leaveRoom", roomID, id);
        } else {
            toast.warning("Room cancelled by its creator.", { toastId: "forceOut" });
        }
        cancelJoinRoom();
    }

    const cancelJoinRoom = () => {
        props.closePage();
        socket.off("roomCode");
        socket.off("playerUpdate");
        socket.off("roomDeleted");
    }

    return (
        <div className="fullCover" id="join-page">

            {joined ? (
                <div className="lower-section">
                    <h1 className="title-text">Room ID: {roomID}</h1>
                    <div className="playerList">
                        {players.map((n) =>
                            <div className="player-box">
                                <p key={n.id}>{n.name}</p>
                            </div>
                        )}
                    </div>
                    <button className="red" onClick={() => setShowConfirm(true)}>Leave Room</button>
                    <Confirm
                        show={showConfirm}
                        clickYes={() => leaveRoom(true)}
                        clickNo={() => setShowConfirm(false)}
                        title="Are you sure?"
                    />
                </div>
            ) : (
                <React.Fragment>
                    <a className="close" onClick={cancelJoinRoom}>&times;</a>
                    <div className="lower-section">
                        <h1 className="title-text">Join Game</h1>
                        <div className="input-container">
                            <input onChange={(event) => setRoomID(event.target.value.trim())} type="text" placeholder="Enter your room ID" />
                            <input onChange={(event) => setName(event.target.value.trim())} type="text" placeholder="Give yourself a name in the game" />
                            <button disabled={name === "" || roomID.length !== 5} onClick={() => socket.emit("joinRoom", name, roomID)}>Join Room</button>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div >
    )
}