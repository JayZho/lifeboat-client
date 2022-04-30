import { useContext, useEffect, useState } from "react";
import { socket } from "../../App";
import "./CreateRoomPage.scss";
import { toast } from 'react-toastify';

export function CreatePage(props) {
    const [name, setName] = useState("");
    const [roomSet, setRoomSet] = useState(false);
    const [players, setPlayers] = useState([]);
    const [roomCode, setRoomCode] = useState("");
    const [playerNames, setPlayerNames] = useState([]);

    // useEffect(() => {
    //     socket.on("roomCode", receiveRoomID);
    //     socket.on("playerUpdate", updatePlayers);
    //     console.log(socket);
    // }, []);

    const updatePlayers = (names) => {
        console.log(names);
        setPlayerNames(names);
    }

    const receiveRoomID = (roomID) => {
        if (roomID === "") {
            toast.error("Failed to create a new room.")
            return
        }
        toast.success("Room Created!", { toastId: "create success" });
        setRoomCode(roomID);
        localStorage.setItem("roomID", roomID);
    }

    const cancelCreateRoom = () => {
        socket.off("roomCode");
        socket.off("playerUpdate");
        props.closePage();
    }

    return (
        <div id="create-page" className="fullCover">

            <a className="close" onClick={cancelCreateRoom}>&times;</a>
            {roomCode !== "" ? <div className="lower-section">
                <h1 className="title-text">Room ID: {roomCode}</h1>
                <div className="playerList">
                    {playerNames.map((n) => <p key={n.ID}>{n.NAME}</p>)}
                </div>
                <button className="red">Cancel this room</button>
            </div> : <div className="lower-section">
                <h1 className="title-text">Create Game</h1>
                <input type="text" placeholder="Give yourself a name in the game" onChange={(event) => setName(event.target.value.trim())} />
                <button disabled={name === ""} onClick={() => socket.emit("createRoom", name)}>Create Room</button>
            </div>}
        </div>
    )
}