import React, { useState } from "react";
import "./profile.css";

function Profile() {
    // eslint-disable-next-line
    const [player, setPlayer] = useState("Current player name");
    return <div className="game-profile">{player}</div>;
}

export default Profile;
