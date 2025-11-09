"use client"; //esto significa que el componente se ejecuta en el navegador y me permite usar hooks como useState, useEffect, etc

import { useState } from "react";
import TweetCard from "./TweetCard";
import CreateTweet from "./CreateTweet";

export default function TweetList({ tweets }) {
    const [visible, setVisible] = useState(5);
    const showMore = () => setVisible((prev)=> prev +5);

    return (
        <section className="flex flex-col items-center px-6 overflow-y-auto max-h-[80vh]">
            <CreateTweet />
            {tweets.slice(0, visible).map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
            ))} 

            {visible < tweets.length && (
                <button onClick={showMore} className="rounded-full mb-5 text-white bg-linear-to-b from-blue-500 to-blue-800 p-2 hovereffect">Show More</button>
            )}
        </section>
    )
}