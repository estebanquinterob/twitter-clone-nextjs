"use client";
import { useState } from "react";

export default function CommentForm({ tweetId, onCommentCreated, user }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if(!user){
      alert("You must be logged in to comment.");
      return;
    }

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // enviar datos en formato JSON. No es un formulario normal. Sin esto, req.json() en la API NO podría interpretar el body.
      body: JSON.stringify({
        tweetId,
        content,
        userId: user.id, // enviar el id del usuario que comenta
        username: user.username // enviar el nombre del usuario que comenta
      }),
    });

    if (!res.ok) {
      console.error("Error creating comment");
      return;
    }

    const newComment = await res.json(); // la respuesta de la API (el comentario creado).

    onCommentCreated(newComment);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)} // onChange escucha cuando el usuario escribe.
        placeholder={user?"Write a comment...":"Log in to write a comment..."}
        className="w-full p-2 border rounded"
        disabled={!user} // deshabilitar el input si no hay usuario
      />
      <button
       type="submit"
       className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
       // se bloquea el boton si no hay sesion
       disabled={!user} > 
        Comment
      </button>
    </form>
  );
}


{/* <div className="flex flex-col p-4 w-full rounded-2xl text-gray-700 mt-4">
        <textarea className="p-2 bg-gray-100 rounded-xl" placeholder="Write a comment..." maxLength={280}></textarea>
        <div className="ml-auto mt-3">
        <button className="rounded-full text-white bg-linear-to-b from-blue-500 to-blue-800 p-1 px-3 text-sm hovereffect">Comment</button>
        </div>
</div> */}