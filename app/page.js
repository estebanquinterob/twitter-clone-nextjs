import TweetList from "@/components/TweetList";

async function fetchTweets() {
  try {
    const response = await fetch ("https://dummyjson.com/posts");
    const data= await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error getting Tweets:", error);
  }
}


export default async function HomePage() {
  const tweets = await fetchTweets();
  return (
    <main>
        <article className="p-6">
            <h1 className="text-center font-bold m-4 text-xl">Welcome to Twitter Clone</h1>
            <TweetList tweets={tweets} />
        </article>
    </main>
  );
}

// aqui iria el fetch y luego llama tweetcard, header, sidebar
// para el fetch debo usar el useEffect y useState de react? 
// aqui quiero poner 2 columnas, una para sidebar, otra central principal y otra a la derecha vacia o con algo que aun no se ha definido
// si quiero pasarle classname a un componente debo ponerlo explicitamente en las props del componente
{/* 
  ejemplo
  <Sidebar className="order-1 md:order-2" />

Y en tu componente Sidebar.jsx:

jsx
export default function Sidebar({ className }) {
  return (
    <aside className={`bg-gray-100 p-4 rounded-lg ${className}`}>
      Sidebar content here
    </aside>
  );
} */}

