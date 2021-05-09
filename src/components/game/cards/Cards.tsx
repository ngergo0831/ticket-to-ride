import { useSelector } from "react-redux";
import { getUserWagons } from "../../../state/selectors";
import Card from "./Card";
import { v4 } from "uuid";
import "./cards.css";

function Cards() {
    let cards = useSelector(getUserWagons);

    return (
        <div className="game-cards">
            {cards && cards.map((x) => <Card color={x.color} key={v4()} />)}
        </div>
    );
}

export default Cards;
