import React from "react";
import Player from "./Player";
import "./styles/players.css";

function Players() {
    return (
        <div className="game-players">
            <div className="test">
                <div className="game-players__title">Players</div>
                <Player />
                <Player />
                <Player />
                <Player />
                <Player />
            </div>
        </div>
    );
}

export default Players;
