import { images } from "../../../Images";

function Card(props: any) {
    return (
        <div className="train-card">
            <img src={images["black"]} alt="sihuhu" />
        </div>
    );
}

export default Card;
