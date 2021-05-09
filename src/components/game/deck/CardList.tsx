import { useSelector } from "react-redux";
import { getOnFieldCards } from "../../../state/selectors";
import DeckCard from "./DeckCard";
import { v4 } from "uuid";

function CardList() {
    const onFieldCards = useSelector(getOnFieldCards);
    return (
        <div className="deck-cards-flex">
            {onFieldCards &&
                onFieldCards.map((x, i) => (
                    <DeckCard
                        color={x.color + "_r"}
                        key={v4()}
                        clicked={i}
                    />
                ))}
        </div>
    );
}

export default CardList;
