export default function Profile() {
    return (
    <div className="p-6 space-y-4 min-h-screen">
        <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div>
                <h1 className="text-2xl font-bold">Username</h1>
                <p className="text-gray-600">@username</p>
            </div>
        </div>
             
        <div className="bg-white shadow rounded-xl p-4">
            <h2 className="font-semibold mb-2">Bio</h2>
            <p className="text-gray-600">This is a sample bio.</p>
        </div>
                        
        <div className="bg-white shadow rounded-xl p-4">
            <h2 className="font-semibold mb-2">Posts</h2>
            <p className="text-gray-600">This user has no posts yet.</p>
        </div>
    </div>
    );
    }