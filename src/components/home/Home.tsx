import React, { useState } from "react";
import Logo from "./Logo";
import "./home.css";
import NewRoom from "./NewRoom";
import ConnectRoom from "./ConnectRoom";
import { Redirect } from "react-router-dom";

function Home() {
    const [submitted, setSubmitted] = useState(false);
    const redirectRules = (e: any) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Redirect
                push
                to={{
                    pathname: "/rules",
                }}
            />
        );
    }

    return (
        <div className="home">
            <Logo />
            <NewRoom />
            <ConnectRoom />
            <button onClick={redirectRules} className="home-btn edit">
                Szabályok
            </button>
        </div>
    );
}

export default Home;
