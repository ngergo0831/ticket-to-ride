import { useDispatch, useSelector } from "react-redux";
import { drawFromDeck } from "../../../state/actions";
import { getCurrentPlayer, getWagonDeck } from "../../../state/selectors";
import CardList from "./CardList";
import "./deck.css";

function Deck() {
    const wagonDeck = useSelector(getWagonDeck);
    const userCards = useSelector(getCurrentPlayer)?.wagonCards?.length;
    const dispatch = useDispatch();

    const handleClick = () => {
        if (userCards && userCards < 9) dispatch(drawFromDeck("", 0));
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
