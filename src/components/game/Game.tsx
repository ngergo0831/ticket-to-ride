import React from "react";
import Cards from "./cards/Cards";
import Deck from "./deck/Deck";
import Players from "./players/Players";
import Profile from "./profile/Profile";
import Map from "./map/Map";
import "./game.css";
import Destinations from "./destinations/Destinations";

function Game() {
    return (
        <div className="main-layout">
            <div className="left-side">
                <Players />
                <Destinations />
            </div>
            <div className="center-side">
                <Map />
                <Cards />
            </div>
            <div className="right-side">
                <Deck />
                <Profile />
            </div>
        </div>
    );
}

export default Game;
