import { rotatedImages } from "../../../Images";

type DeckCardColor = {
    color?: string;
    key?: string;
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

function DeckCard({ color = "red" }: DeckCardColor) {
    return (
        <div className="deck-card">
            <img src={rotatedImages[color as Colors]} alt="shuuu" />
        </div>
    );
}

export default DeckCard;
