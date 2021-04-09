import React from "react";
import Cards from "./cards/Cards";
import Deck from "./deck/Deck";
import Players from "./Players";
import Profile from "./Profile";
import Map from "./Map";
import "./styles/game.css";

function Game() {
    return (
        <div className="game-layout">
            <Players />
            <Map />
            <Deck />
            <Cards />
            <Profile />
        </div>
    );
}

export default Game;
