import { useDispatch, useSelector } from "react-redux";
import { drawFromDeck } from "../../../state/actions";
import { getClientPlayer, getCurrentPlayer, getWagonDeck } from "../../../state/selectors";
import CardList from "./CardList";
import "./deck.css";

function Deck() {
    const wagonDeck = useSelector(getWagonDeck);
    const userCards = useSelector(getClientPlayer)?.wagonCards?.length;
    const currentPlayer = useSelector(getCurrentPlayer);
    const clientPlayer = useSelector(getClientPlayer);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (userCards && userCards < 9 && currentPlayer?.name === clientPlayer?.name) dispatch(drawFromDeck("", 0));
    };

    return (
        <div className="game-deck">
            <div className="h4">Remaining cards: {wagonDeck?.length}</div>
            <CardList />
            <button className="btn btn-dark mt-3 p-2" onClick={handleClick}>
                Draw from the deck
            </button>
        </div>
    );
}

export default Deck;
