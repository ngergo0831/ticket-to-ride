import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const NewRoom = () => {
    const [players, setPlayers] = useState(1);
    const plusPlayer = (e: any) => {
        e.preventDefault();
        if (players < 5) {
            setPlayers(players + 1);
        }
        if (players === 5) {
            //disable button plus
        }
    };
    const minusPlayer = (e: any) => {
        e.preventDefault();
        if (players > 1) {
            setPlayers(players - 1);
        }
        if (players === 1) {
            //disable button minus
        }
    };
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
            <div>Játékosok száma:</div>
            <div className="new-room-players">
                <button
                    className="new-room-players__button"
                    onClick={minusPlayer}
                >
                    -
                </button>
                <div className="new-room-players__text">{players}</div>
                <button
                    className="new-room-players__button pluss"
                    onClick={plusPlayer}
                >
                    +
                </button>
            </div>
            <div className="new-room-input">
                <div className="new-room-input-items new-room-text">
                    Becenév:
                </div>
                <input
                    type="text"
                    maxLength={14}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <button className="home-btn edit" onClick={createRoom}>
                Létrehozás
            </button>
        </form>
    );
};

export default NewRoom;
