import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import socket from "../../socket";
import {
    createRoom,
    modifyPlayerCount,
    modifyPlayerName,
} from "../../state/actions";
import { countPlayers } from "../../state/selectors";

const NewRoom = () => {
    const [name, setName] = useState("");
    const playerNumber = useSelector(countPlayers);

    const dispatch = useDispatch();

    const handlePlus = () => {
        if (playerNumber < 5) dispatch(modifyPlayerCount(1));
    };
    const handleMinus = () => {
        if (playerNumber > 2) dispatch(modifyPlayerCount(-1));
    };

    const history = useHistory();
    const handleSubmit = (e: any) => {
        //const roomcode = Math.random().toString(36).substring(7);
        e.preventDefault();
        socket.emit("create-room", playerNumber , (ack: any) => {
            if (ack.status === "ok") {
                dispatch(modifyPlayerName(name));
                dispatch(
                    createRoom({ name, roomsize: playerNumber, roomcode: ack.roomId })
                );
                history.push("/awaiting");
            } else {
                alert("error creating room");
            }
        });
    };
    return (
        <form className="new-room" onSubmit={handleSubmit}>
            <div className="new-room-title">Új szoba létrehozása</div>
            <div>Játékosok száma:</div>
            <div className="new-room-players">
                <button
                    type="button"
                    className="new-room-players__button"
                    onClick={handleMinus}
                >
                    -
                </button>
                <div className="new-room-players__text">{playerNumber}</div>
                <button
                    type="button"
                    className="new-room-players__button pluss"
                    onClick={handlePlus}
                >
                    +
                </button>
            </div>
            <div className="new-room-input">
                <div className="new-room-input-items new-room-text">
                    Becenév:
                </div>
                <input
                    name="nickname"
                    type="text"
                    maxLength={14}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <button className="home-btn edit">Létrehozás</button>
        </form>
    );
};

export default NewRoom;
