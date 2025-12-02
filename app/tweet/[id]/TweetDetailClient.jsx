"use client";

import { useState } from "react";
import TweetCard from "@/components/TweetCard";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";

export default function TweetDetailClient({ initialTweet }) {
    const [comments, setComments] = useState(initialTweet.comments || []); // si initialTweet.comments es null, undefined, o falsy → usa un array vacío, evita erros si aun no hay comentarios

    function handleCommentCreated(newComment) {
        setComments((prevComments) => [newComment, ...prevComments]); // agrega el nuevo comentario al inicio del array de comentarios
    }

    return (
        <main className="h-dvh">
            <TweetCard tweet={{ ...initialTweet, commentsCount: comments.length }} /> {/* el comments.lenght aun no lo he implementado */}
            <div>
                <CommentForm tweetId={initialTweet._id} onCommentCreated={handleCommentCreated} />
                <CommentList comments={comments} />
            </div>
        </main>
    );

}