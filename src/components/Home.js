import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "../App.css";

const Home = () => {
    const [subs, setSubs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/subreddits").then((res) => {
            setSubs(res.data);
        });
    }, []);

    return (
        <>
            <h1>Subreddits</h1>
            {subs.length > 0 ? (
                <>
                    <ul>
                        {subs.map((s) => {
                            return (
                                <h5>
                                    <Link key={s.Id} className="link" to={`/subreddit/${s.Name}`} state={s}>
                                        {s.Name}
                                    </Link>
                                </h5>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <div>none</div>
            )}
        </>
    );
};

export default Home;
