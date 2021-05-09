import { useDispatch, useSelector } from "react-redux";
import { drawFromDeck } from "../../../state/actions";
import { getWagonDeck } from "../../../state/selectors";
import CardList from "./CardList";
import "./deck.css";

function Deck() {
    const wagonDeck = useSelector(getWagonDeck);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(drawFromDeck('',0));
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
