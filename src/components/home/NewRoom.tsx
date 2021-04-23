import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { modifyPlayerCount } from "../../state/actions";
import { countPlayers } from "../../state/selectors";

const NewRoom = () => {
    /*const [players, setPlayers] = useState(1);
    const plusPlayer = (e: any) => {
        e.preventDefault();
        if (players < 5) {
            setPlayers(players + 1);
        }
        if (players === 5) {
            //disable button plus
        }
    };
    const minusPlayer = (e: any) => {
        e.preventDefault();
        if (players > 1) {
            setPlayers(players - 1);
        }
        if (players === 1) {
            //disable button minus
        }
    };*/
    const players = useSelector(countPlayers);
    const dispatch = useDispatch();
    
    const handlePlus = () => dispatch(modifyPlayerCount(1));
    const handleMinus = () => dispatch(modifyPlayerCount(-1));
    
    const history = useHistory();
    const handleSubmit = () => history.push("/awaiting");
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
                <div className="new-room-players__text">{players}</div>
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
                    type="text"
                    maxLength={14}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <button className="home-btn edit">Létrehozás</button>
        </form>
    );
};

export default NewRoom;
