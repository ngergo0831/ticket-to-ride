import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRoom, modifyPlayerCount } from "../../state/actions";
import { countPlayers } from "../../state/selectors";

const NewRoom = () => {
    const [name, setName] = useState("");
    const playerNumber = useSelector(countPlayers);

    const dispatch = useDispatch();

    const handlePlus = () => {
        if (playerNumber < 5) dispatch(modifyPlayerCount(1));
    };
    const handleMinus = () => {
        if (playerNumber > 1) dispatch(modifyPlayerCount(-1));
    };

    const history = useHistory();
    const handleSubmit = () => {
        dispatch(createRoom(name, playerNumber));
        history.push("/awaiting");
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
