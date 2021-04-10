import React from "react";
import "./map.css";
import map from "../../../res/map.jpg";

function Map() {
    return (
        <div className="game-map">
            <img src={map} alt="map" className="map-img" />
        </div>
    );
}

export default Map;
