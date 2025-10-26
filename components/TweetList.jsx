"use client"; //esto significa que el componente se ejecuta en el navegador y me permite usar hooks como useState, useEffect, etc

import { useState } from "react";
import TweetCard from "./TweetCard";

export default function TweetList({ tweets }) {
    const [visible, setVisible] = useState(5);
    const showMore = () => setVisible((prev)=> prev +5);

    return (
        <section>
            {tweets.slice(0, visible).map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}

            {visible < tweets.length && (
                <button onClick={showMore}>Show More</button>
            )}
        </section>
    )
}