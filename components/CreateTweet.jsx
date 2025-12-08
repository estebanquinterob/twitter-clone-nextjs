"use client";

import { useState } from "react";
import { useSession } from "next-auth/react"; // importar el hook useSession para obtener la sesion del usuario


export default function CreateTweet({ onTweetCreated }) {
    const { data: session } = useSession();
    const [content, setContent] = useState("");

    async function handleSubmit(e) { // manejar el envio del tweet, e es el evento del formulario
        e.preventDefault(); // evitar que se recargue la pagina al enviar el formulario

        const randomUser = "user" + Math.floor(Math.random() * 1000); // generar un usuario aleatorio para el tweet
        const newTweet = {
            user: randomUser,
            content: content,
            tags: [], 
            reactions: { likes: 0, dislikes: 0 },
        };

        const res = await fetch("/api/tweets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTweet),
        });
        if (res.ok) {
            const createdTweet = await res.json();
            onTweetCreated(createdTweet); // llamar a la funcion pasada por props para actualizar la lista de tweets en el componente padre, actualizar la lista sin recargar la pagina
            setContent(""); // limpiar el textarea despues de enviar el tweet
        } else {
            console.error("Error creating tweet");
        }
    }

    return (
        // sticky top-0 z-10  se usarian si quisiera que el createtweet se quedara siempre visible
        <form onSubmit={handleSubmit} className="flex flex-col p-4 w-full rounded-2xl shadow-md hovereffect hovereffect:hover bg-white text-gray-700">
            <textarea className="w-full p-3" placeholder="What's happening?" value={content} onChange={(e)=> setContent(e.target.value)} maxLength={280}></textarea>
            <div className="ml-auto mt-3">
             <button className="rounded-full text-white bg-linear-to-b from-blue-500 to-blue-800 p-2 px-5 hovereffect">Tweet</button>
            </div>
        </form>
    ); 
}