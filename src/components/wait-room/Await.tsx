import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import socket from "../../socket";
import { startGame } from "../../state/actions";
import {
    getClientPlayer,
    getMaxPlayers,
    getPlayers,
    getRoomCode,
} from "../../state/selectors";
import { Status } from "../../types";
import { v4 } from "uuid";

import "./await.css";

function Await() {
    useEffect(() => {
        window.onbeforeunload = function () {
            console.log(
                "If you refresh then the game might broke. So pls no. 🥺"
            );
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);

    const players = useSelector(getPlayers).length;
    const statePlayers = useSelector(getPlayers);
    const maxPlayers = useSelector(getMaxPlayers);
    const code = useSelector(getRoomCode);
    const clientPlayer = useSelector(getClientPlayer);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (statePlayers && statePlayers[0].name !== clientPlayer?.name) {
            alert("Csak a szoba készítője indíthatja el a játékot!");
            return;
        }
        dispatch(startGame("", 0));
        socket.emit("close-room", code, (ack: any) => {
            if (ack.status === "error") {
                alert(ack.message);
            }
        });
        history.push("/game");
    };

    if (players === maxPlayers) {
        history.push("/game");
    }

    socket.on("room-is-full", (res) => {
        socket.emit("get-state", code, (stateAck: any) => {
            if (stateAck.status === "ok") {
                const state = JSON.parse(stateAck.state);
                if (state.gameStatus !== Status.IN_GAME) {
                    dispatch(startGame("", 0));
                }
                history.push("/game");
            }
        });
    });

    return (
        <div className="awaiting">
            <div className="h3">{code}</div>
            <div>Várakozás a játékosokra</div>
            <div>
                {players} / {maxPlayers} játékos csatlakozott eddig
            </div>
            <div>
                Játékosok:
                {statePlayers &&
                    statePlayers.map((x) => <div key={v4()}>{x.name}</div>)}
            </div>
            <button className="home-btn edit" onClick={handleSubmit}>
                Tovább a játékra
            </button>
        </div>
    );
}

export default Await;
