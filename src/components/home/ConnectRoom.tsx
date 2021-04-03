import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function ConnectRoom() {
    const [submitted, setSubmitted] = useState(false);
    const connectRoom = (e: any) => {
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
        <form className="new-room" onSubmit={connectRoom}>
            <div className="new-room-title">Csatlakozás a szobához</div>
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
            <div className="new-room-input">
                <div className="new-room-input-items new-room-text">
                    Szobakód:
                </div>
                <input
                    type="text"
                    maxLength={14}
                    className="home-input edit new-room-input-items"
                />
            </div>
            <button
                type="submit"
                className="home-btn edit new-room-input-items"
            >
                Csatlakozás
            </button>
        </form>
    );
}

export default ConnectRoom;
