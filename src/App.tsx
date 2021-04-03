import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Await from "./components/wait-room/Await";
import Rules from "./components/rules/Rules";
import Game from "./components/game/Game";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/awaiting" component={Await} />
                <Route exact path="/rules" component={Rules} />
                <Route exact path="/game" component={Game} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
