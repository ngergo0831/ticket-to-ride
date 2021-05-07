import { useSelector } from "react-redux";
import { getUserWagons } from "../../../state/selectors";
import Card from "./Card";
import "./cards.css";

function Cards() {
    let cards = useSelector(getUserWagons);

    // eslint-disable-next-line

    return (
        <div className="game-cards">
            {cards?.map((x, i) =>
                cards ? <Card color={cards[i]?.color} key={i} /> : ""
            )}
        </div>
    );
}

export default Cards;
