export default function RightSidebar() {
    return (
      <aside className="hidden lg:block w-80 p-4 space-y-6">
  
        {/* Trends Box */}
        <section className="bg-white rounded-2xl shadow-sm p-4 border border-gray-200">
          <h2 className="text-xl font-bold mb-3">Trends</h2>
  
          <ul className="space-y-3">
            <li className="cursor-pointer">
              <p className="text-sm text-gray-500">Trending in Tech</p>
              <p className="font-semibold">#JavaScript</p>
              <p className="text-xs text-gray-400">12.3K posts</p>
            </li>
  
            <li className="cursor-pointer">
              <p className="text-sm text-gray-500">Trending in AI</p>
              <p className="font-semibold">#OpenAI</p>
              <p className="text-xs text-gray-400">45.7K posts</p>
            </li>
  
            <li className="cursor-pointer">
              <p className="text-sm text-gray-500">Trending Worldwide</p>
              <p className="font-semibold">#NextJS</p>
              <p className="text-xs text-gray-400">8.9K posts</p>
            </li>
          </ul>
        </section>
  
        {/* News Box */}
        <section className="bg-white rounded-2xl shadow-sm p-4 border border-gray-200">
          <h2 className="text-xl font-bold mb-3">News</h2>
  
          <div className="space-y-4">
            <article className="cursor-pointer">
              <h3 className="font-semibold">Tech company launches new product</h3>
              <p className="text-sm text-gray-500">5 min ago</p>
            </article>
  
            <article className="cursor-pointer">
              <h3 className="font-semibold">AI breakthrough shocks researchers</h3>
              <p className="text-sm text-gray-500">30 min ago</p>
            </article>
  
            <article className="cursor-pointer">
              <h3 className="font-semibold">Crypto market sees major movement</h3>
              <p className="text-sm text-gray-500">1 hour ago</p>
            </article>
          </div>
        </section>
  
      </aside>
    );
  }
  