import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import socket from "../../socket";
import { joinRoom, modifyPlayerName } from "../../state/actions";

export const ConnectRoom: FC = () => {
    const [name, setName] = useState("");
    const [roomId, setRoomId] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        socket.emit("join-room", roomId, (ack: any) => {
            if (ack.status === "ok") {
                socket.emit("get-state", roomId, (stateAck: any) => {
                    if (stateAck.status === "ok") {
                        const state = JSON.parse(stateAck.state);                        
                        const syncRoomInfo = {
                            players: state.players,
                            maxPlayers: state.maxPlayers,
                            code: state.code,
                            name,
                        };                        
                        dispatch(joinRoom(syncRoomInfo));
                        dispatch(modifyPlayerName(name));
                        history.push("/awaiting");
                    }
                });
            } else {
                alert(ack.message + " " + roomId);
            }
        });
    };

    return (
        <form className="new-room" onSubmit={handleSubmit}>
            <div className="new-room-title">Csatlakozás a szobához</div>
            <div className="new-room-input">
                <div className="new-room-input-items new-room-text">
                    Becenév:
                </div>
                <input
                    type="text"
                    maxLength={14}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <div className="new-room-input">
                <div className="new-room-input-items new-room-text">
                    Szobakód:
                </div>
                <input
                    type="text"
                    value={roomId}
                    onChange={(e) => {
                        setRoomId(e.target.value);
                    }}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <button
                type="submit"
                className="home-btn edit new-room-input-items"
            >
                Csatlakozás
            </button>
        </form>
    );
};
