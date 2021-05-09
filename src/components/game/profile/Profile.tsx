import { useSelector } from "react-redux";
import { getCurrentPlayer } from "../../../state/selectors";
import "./profile.css";

enum Help {
    start = "Draw a card or build line!",
    draw = "Draw one more card or end turn!",
    build_1 = "Select a destination from the map!",
    build_2 = "Select the ending destination!",
}

function Profile() {
    const player = useSelector(getCurrentPlayer);
    const help: Help = Help.start;
    return (
        <div className="game-profile">
            <div className="h4">Aktuális játékos:</div>
            <div className="h5">{player?.name}</div>
            <div>
                <strong>{help}</strong>
            </div>
        </div>
    );
}

export default Profile;
