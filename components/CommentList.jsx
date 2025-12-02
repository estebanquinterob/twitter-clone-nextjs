"use client";
import { useEffect, useState } from "react";

export default function CommentList({ tweetId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/comments?tweetId=${tweetId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [tweetId]);

  return (
    <ul className="mt-4 space-y-2">
      {comments.map((comment) => (
        <li
          key={comment._id}
          className="p-2 border rounded bg-gray-50 shadow"
        >
          <p className="text-sm">{comment.content}</p>
          <span className="text-xs text-gray-500">
            {new Date(comment.createdAt).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
}


        // <div className="mt-4">
        //     {comments.map((comment) => (
        //         <div key={comment.id} className="border-b border-gray-200 py-4">
        //             <p className="text-gray-800">{comment.content}</p>
        //             <p className="text-sm text-gray-500 mt-1">By {comment.author}</p>
        //         </div>
        //     ))}
        // </div>