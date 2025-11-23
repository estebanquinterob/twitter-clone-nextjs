"use client"; //esto significa que el componente se ejecuta en el navegador y me permite usar hooks como useState, useEffect, etc

import { useState } from "react";
import TweetCard from "./TweetCard";
import CreateTweet from "./CreateTweet";

export default function TweetList({ initialTweets }) {

    const [tweets, setTweets] = useState(initialTweets); // estado local para manejar los tweets nuevos y que no se deba recargar toda la pagina
    const [visible, setVisible] = useState(5);
    const showMore = () => setVisible((prev)=> prev +5);

    function handleNewTweet(newTweet) {
        setTweets((prevTweets) => [newTweet, ...prevTweets]); // agregar el nuevo tweet al inicio de la lista de tweets
    }

    return (
        <section className="flex flex-col items-center px-6 overflow-y-auto max-h-[80vh]">
            <CreateTweet onTweetCreated={handleNewTweet} />
            {tweets.slice(0, visible).map((tweet) => (
            <TweetCard key={tweet._id} tweet={tweet} />
            ))}

            {visible < tweets.length && (
                <button onClick={showMore} className="rounded-full mb-5 text-white bg-linear-to-b from-blue-500 to-blue-800 p-2 hovereffect">Show More</button>
            )}
        </section>
    )
}