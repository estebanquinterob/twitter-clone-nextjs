export default function CommentList({ comments }) { // { comments }
    return (
        <ul className="p-3">
            {comments.map((comment) => (
                <li key={comment._id} className="border-b border-gray-200 py-4">
                    {comment.content}
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