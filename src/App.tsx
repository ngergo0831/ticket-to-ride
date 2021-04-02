import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Await from "./components/wait-room/Await";
import Rules from "./components/rules/Rules";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                   <Route path="/awaiting" component={Await} />
                   <Route path="/rules" component={Rules} />
               </Switch>
            </div>
        </Router>
    );
}

export default App;
