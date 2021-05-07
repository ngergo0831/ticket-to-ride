
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { startGame } from "../../state/actions";
import { getMaxPlayers, getPlayers } from "../../state/selectors";

import "./await.css";

function Await() {
    const players = useSelector(getPlayers).length;
    const maxPlayers = useSelector(getMaxPlayers);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(startGame('',0));
        history.push("/game");
    };
    return (
        <div className="awaiting">
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
