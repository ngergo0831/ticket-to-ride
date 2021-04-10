import React from "react";
import Player from "./Player";
import "./players.css";

function Players() {
    return (
        <div className="game-players">
            <div className="game-players__title">Players</div>
            <Player />
            <Player />
            <Player />
            <Player />
            <Player />
        </div>
    );
}

export default Players;
