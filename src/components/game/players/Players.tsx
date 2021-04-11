import { useState } from "react";
import Player from "./Player";
import "./players.css";

interface PlayerProps {
    name: string;
    vagons: number;
    card1: number;
    card2: number;
}

function Players() {
    let playerArray: PlayerProps[] = [];
    for (let i = 1; i < 6; i++) {
        playerArray.push({
            name: "Player " + i,
            vagons: Math.floor(Math.random() * 40),
            card1: Math.floor(Math.random() * 20),
            card2: Math.floor(Math.random() * 10),
        });
    }
    // eslint-disable-next-line
    const [players, setPlayers] = useState<PlayerProps[]>(playerArray);

    return (
        <div className="game-players">
            <div className="game-players__title">Players</div>
            {[...Array(5)].map((x, i) => (
                <Player
                    name={players[i].name}
                    vagons={players[i].vagons}
                    card1={players[i].card1}
                    card2={players[i].card2}
                    key={i}
                />
            ))}
        </div>
    );
}

export default Players;
