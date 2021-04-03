import React from "react";
import "./styles/map.css";
import map from "../../res/map.jpg";

function Map() {
    return (<div className="game-map">
        <img src={map} alt="map"/>
    </div>);
}

export default Map;
