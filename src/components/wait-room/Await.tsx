
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { startGame } from "../../state/actions";
import { getMaxPlayers, getPlayers, getRoomCode } from "../../state/selectors";

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
    const maxPlayers = useSelector(getMaxPlayers);
    const code = useSelector(getRoomCode);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(startGame('',0));
        history.push("/game");
    };
    return (
        <div className="awaiting">
            <div className="h1">{code}</div>
            <div>Várakozás a játékosokra</div>
            <div>
                {players} / {maxPlayers} játékos csatlakozott eddig
            </div>
            <button className="home-btn edit" onClick={handleSubmit}>
                Tovább a játékra
            </button>
        </div>
    );
}

export default Await;
