import React, { useState } from "react";
import Card from "./Card";
import "./cards.css";

function Cards() {
    let colors = [
        "white",
        "orange",
        "blue",
        "black",
        "yellow",
        "red",
        "purple",
        "green",
    ];

    let cards: string[] = [];
    for (let i = 0; i < 9; i++) {
        cards.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    // eslint-disable-next-line
    const [players, setPlayers] = useState<string[]>(cards);
    return (
        <div className="game-cards">
            {[...Array(9)].map((x, i) => (
                <Card color={cards[i]} key={i} />
            ))}
        </div>
    );
}

export default Cards;
