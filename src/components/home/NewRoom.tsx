import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewRoom = () => {
    const [submitted, setSubmitted] = useState(false);
    const createRoom = (e: any) => {
        e.preventDefault();
        setSubmitted(true);
    };
    if (submitted) {
        return (
            <Redirect
                push
                to={{
                    pathname: "/awaiting",
                }}
            />
        );
    }
    return (
        <form className="new-room" onSubmit={createRoom}>
            <div className="new-room-title">Új szoba létrehozása</div>
            <div>Játékosok száma: 1 2 3 4</div>
            <div>
                Becenév: <input type="text" className="home-input edit"></input>
            </div>
            <button className="home-btn edit" onClick={createRoom}>
                Létrehozás
            </button>
        </form>
    );
};

export default NewRoom;
