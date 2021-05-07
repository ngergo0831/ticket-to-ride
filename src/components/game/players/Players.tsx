import { useSelector } from "react-redux";
import { getPlayers } from "../../../state/selectors";
import PlayerCard from "./Player";
import "./players.css";

function Players() {
    const playerCards = useSelector(getPlayers);
    return (
        <div className="game-players">
            <div className="game-players__title">Players</div>
            {playerCards.map((element, index) => (
                <PlayerCard
                    name={element.name}
                    vagons={element.wagons}
                    card1={element.shortDestCards?.length}
                    card2={element.wagonCards?.length}
                    card3={element.longDestCards?.length}
                    key={index}
                />
            ))}
        </div>
    );
}

export default Players;
