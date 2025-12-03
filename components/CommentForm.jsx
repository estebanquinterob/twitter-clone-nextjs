"use client";
import { useState } from "react";

export default function CommentForm({ tweetId, onCommentCreated }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // enviar datos en formato JSON. No es un formulario normal. Sin esto, req.json() en la API NO podría interpretar el body.
      body: JSON.stringify({
        tweetId,
        content,
      }),
    });

    const newComment = await res.json(); // la respuesta de la API (el comentario creado).

    onCommentCreated(newComment);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)} // onChange escucha cuando el usuario escribe.
        placeholder="Escribe un comentario..."
        className="w-full p-2 border rounded"
      />
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
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