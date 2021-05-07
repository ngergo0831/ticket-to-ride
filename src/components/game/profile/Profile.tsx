import { useSelector } from "react-redux";
import { getCurrentPlayer} from "../../../state/selectors";
import "./profile.css";

function Profile() {
    const player = useSelector(getCurrentPlayer);
    return (
        <div className="game-profile">
            Aktuális játékos:<br></br>
            {player?.name}
        </div>
    );
}

export default Profile;
