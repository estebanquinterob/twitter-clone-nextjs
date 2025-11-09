export default function CommentForm() {
    return (
        <div className="flex flex-col p-4 w-full rounded-2xl  text-gray-700   mt-4">
            <textarea className="p-2 bg-gray-100 rounded-xl" placeholder="Write a comment..." maxLength={280}></textarea>
            <div className="ml-auto mt-3">
             <button className="rounded-full text-white bg-linear-to-b from-blue-500 to-blue-800 p-1 px-3 text-sm hovereffect">Comment</button>
            </div>
        </div>
    );
}