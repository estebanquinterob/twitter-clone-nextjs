export default function ExplorePage() {
    return (
    <div className="p-6 space-y-4 min-h-screen">
        <h1 className="text-2xl font-bold">Explore</h1>
        <div className="bg-white shadow rounded-xl p-4">
        <h2 className="font-semibold mb-2">Trending Topics</h2>
        <ul className="space-y-2 text-gray-600">
            <li>#NextJS</li>
            <li>#JavaScript</li>
            <li>#WebDev</li>
            <li>#React</li>
        </ul>
        </div>
    </div>
    );
    }