import { useDispatch, useSelector } from "react-redux";
import { rotatedImages } from "../../../Images";
import { drawCard } from "../../../state/actions";
import { getCurrentPlayer } from "../../../state/selectors";

type DeckCardColor = {
    color?: string;
    key?: string;
    clicked?: number;
    cards?: number;
};

type Colors =
    | "white_r"
    | "orange_r"
    | "blue_r"
    | "black_r"
    | "yellow_r"
    | "red_r"
    | "purple_r"
    | "green_r"
    | "wagon_r";

function DeckCard({ color = "red", clicked = 1}: DeckCardColor) {
    const dispatch = useDispatch();
    const cards = useSelector(getCurrentPlayer)?.wagonCards?.length;
    return (
        <div
            className="deck-card"
            onClick={() => {
                if (cards && cards < 9) {
                    dispatch(drawCard("", clicked));
                }
            }}
        >
            <img src={rotatedImages[color as Colors]} alt="shuuu" />
        </div>
    );
}

export default DeckCard;
