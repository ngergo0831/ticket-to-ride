import React from "react";
import CardList from "./CardList";
import DeckTicket from "./DeckTicket";
import DeckTrain from "./DeckTrain";
import "./deck.css";

function Deck() {
    return (
        <div className="game-deck">
            <DeckTicket />
            <CardList />
            <DeckTrain />
        </div>
    );
}

export default Deck;
