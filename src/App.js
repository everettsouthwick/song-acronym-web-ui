import React, { useEffect, useState } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";
import Subreddit from "./components/Subreddit";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Home path="/" />
                    <Subreddit path="/subreddit/:subreddit" />
                </Router>
            </header>
        </div>
    );
}

export default App;
