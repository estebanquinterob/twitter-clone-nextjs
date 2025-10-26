"use client";

import { useState } from "react";

// aqui tuve una confusion con la destructuracion del tweet y su paso como prop, por lo que tuve que leer sobre ello
export default function TweetCard({ tweet }) {
    const { title, body, tags, reactions } = tweet;
    const [likes, setLikes] = useState(reactions.likes);
    const [dislikes, setDislikes] = useState(reactions.dislikes);
    const [hasLiked, setHasLiked] = useState(false);
    const [hasDisliked, setHasDisliked] = useState(false);
    
    function handleLike() {
        if (hasLiked) {
            setLikes(likes - 1);
            setHasLiked(false);
        } else {
            setLikes(likes + 1);
            setHasLiked(true);

            if (hasDisliked) {
                setDislikes(dislikes - 1);
                setHasDisliked(false);
            }
        } 
    }

    function handleDislike() {
        if (hasDisliked) {
            setDislikes(dislikes - 1);
            setHasDisliked(false);
        } else {
            setDislikes(dislikes + 1);
            setHasDisliked(true);

            if (hasLiked) {
                setLikes(likes - 1);
                setHasLiked(false);
            }
        } 
    }

    return (
        <article className="p-4 m-3 rounded-2xl shadow-md hovereffect hovereffect:hover text-gray-700">
            <div>
                <h2 className="font-semibold">{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <div>{tags?.map( tag => (<span key={tag} className="mr-2 text-sm text-blue-500">#{tag}</span>))}</div>
                <div className="flex justify-center gap-3 m-2">
                    <span className={`cursor-pointer px-2 py-1 rounded hovereffect hovereffect:hover ${hasLiked ? "bg-green-600/60" : "bg-gray-200"}`} onClick={handleLike}>👍 {likes} </span>
                    <span className={`cursor-pointer px-2 py-1 rounded hovereffect hovereffect:hover ml-2 ${hasDisliked ? "bg-red-500/60" : "bg-gray-200"}`} onClick={handleDislike}>👎 {dislikes}</span>
                </div>
            </div>
        </article>
    )
}

// h2 --> texto negrilla y mas granden (podria ser un link al perfil de usuario)
// p --> texto normal
// logos --> iconos de like, retweet, reply, en un div juntos para ponerles un flex y space evenly
// padding y margin, border radius, shadow, hover effect (cambiar sombra, color de fondo y tamaño)


