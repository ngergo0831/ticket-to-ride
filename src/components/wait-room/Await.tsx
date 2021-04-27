import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getMaxPlayers, getPlayers } from "../../state/selectors";

import "./await.css";

function Await() {
    const [submitted, setSubmitted] = useState(false);
    const players = useSelector(getPlayers).length;
    const maxPlayers = useSelector(getMaxPlayers);
    const connectRoom = (e: any) => {
        e.preventDefault();
        setSubmitted(true);
    };
    if (submitted) {
        return (
            <Redirect
                push
                to={{
                    pathname: "/game",
                }}
            />
        );
    }
    return (
        <div className="awaiting">
            <div>Várakozás a játékosokra</div>
            <div>
                {players} / {maxPlayers} játékos csatlakozott eddig
            </div>
            <button className="home-btn edit" onClick={connectRoom}>
                Tovább a játékra
            </button>
        </div>
    );
}

export default Await;
