import React from "react";
import { useSelector } from "react-redux";
import { getCurrentPlayer } from "../../../state/selectors";

import "./destinations.css";

function Destinations() {
    const player = useSelector(getCurrentPlayer);

    return (
        <div className="game-destinations">
            <div className="dest-title">Current short destinations: </div>
            {player?.shortDestCards?.map((element, index) => (
                <div key={index}>
                    {element?.fromCity} - {element?.toCity}
                </div>
            ))}
            <div className="dest-title">Current long destinations: </div>
            {player?.longDestCards?.map((element, index) => (
                <div key={index}>
                    {element?.fromCity} - {element?.toCity}
                </div>
            ))}
        </div>
    );
}

export default Destinations;
