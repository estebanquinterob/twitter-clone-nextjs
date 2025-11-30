"use client";

import { useState } from "react";

export default function CommentForm({ tweetId, onComentAdded }) {
    const [commentText, setCommentText] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch(`/api/tweets/${tweetId}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ commentText }),
        });
        
        const updatedTweet = await res.json();

        onCommentAdded(updatedTweet.comments);
        setCommentText("");
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