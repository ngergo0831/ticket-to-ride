import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Await() {
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
                    pathname: "/game",
                }}
            />
        );
    }
    return (
        <>
            <div>Waiting for players to connect.</div>
            <button className="home-btn edit" onClick={connectRoom}>
                Tovább a játékra
            </button>
        </>
    );
}

export default Await;
