import { images } from "../../../Images";

type CardType = {
    color?: string;
};

type Colors =
    | "white"
    | "orange"
    | "blue"
    | "black"
    | "yellow"
    | "red"
    | "purple"
    | "green";

function Card({ color = "black" }: CardType) {
    return (
        <div className="train-card">
            <img src={images[color as Colors]} alt="sihuhu" />
        </div>
    );
}

export default Card;
