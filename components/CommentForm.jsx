"use client";

import { useState } from "react";

export default function CommentForm({ tweetId, onCommentCreated }) {

    const [commentText, setCommentText] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const randomUser = "user" + Math.floor(Math.random() * 1000); // generar un usuario aleatorio para el comentario
        const newComment = {
            user: randomUser,
            content: commentText,
        };

        const res = await fetch(`/api/tweets/${tweetId}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newComment),
        });
        
        if (res.ok) {
            const createdComment = await res.json();
            onCommentCreated(createdComment); // llamar a la funcion pasada por props para actualizar la lista de tweets en el componente padre, actualizar la lista sin recargar la pagina
            setContent(""); // limpiar el textarea despues de enviar el tweet
        } else {
            console.error("Error creating tweet");
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="border p-2 w-full"
                type="text"
                placeholder="Write a comment..."
                maxLength={280}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
            />
            <button className="rounded-full text-white bg-linear-to-b from-blue-500 to-blue-800 p-1 px-3 text-sm hovereffect mt-2" type="submit">Comment</button>
        </form>
    );
}

{/* <div className="flex flex-col p-4 w-full rounded-2xl text-gray-700 mt-4">
        <textarea className="p-2 bg-gray-100 rounded-xl" placeholder="Write a comment..." maxLength={280}></textarea>
        <div className="ml-auto mt-3">
        <button className="rounded-full text-white bg-linear-to-b from-blue-500 to-blue-800 p-1 px-3 text-sm hovereffect">Comment</button>
        </div>
</div> */}