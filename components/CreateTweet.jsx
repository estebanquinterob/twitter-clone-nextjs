export default function CreateTweet() {
    return (
        // sticky top-0 z-10  se usarian si quisiera que el createtweet se quedara siempre visible
        <div className="flex flex-col p-4 w-full rounded-2xl shadow-md hovereffect hovereffect:hover bg-white text-gray-700">
            <textarea className="w-full p-3" placeholder="What's happening?" maxLength={280}></textarea>
            <div className="ml-auto mt-3">
             <button className="rounded-full text-white bg-linear-to-b from-blue-500 to-blue-800 p-2 px-5 hovereffect">Tweet</button>
            </div>
        </div>
    );
}