import React, { useEffect, useState } from "react";
import axios from "axios";

const Subreddit = (props) => {
    const [keywords, setKeywords] = useState([]);
    const sub = props.location.state;
    console.log(sub);

    useEffect(() => {
        axios.get(`http://localhost:3001/keywords/${sub.SubredditId}`).then((res) => setKeywords(res.data));
    }, [sub.SubredditId]);

    return (
        <>
            <h1>/r/{sub.Name}</h1>
            <h5>id: {sub.SubredditId}</h5>
            <ul>
                {keywords.map((k) => {
                    return (
                        <li>
                            {k.Keyword} - {k.CommentText}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Subreddit;
