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
      <h1 className="text-center font-bold m-4 text-xl">Welcome to Twitter Clone</h1>
      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 px-4">
        <aside className="bg-gray-100 p-4 rounded-lg order-2 md:order-1">Left Sidebar</aside>
        <article className="p-6 order-1 md:order-2">
            <TweetList tweets={tweets} />
        </article>
        <aside className="bg-gray-100 p-4 rounded-lg order-3 md:order-3">Right Sidebar</aside>
      </section>
    </main>
  );
}

// aqui iria el fetch y luego llama tweetcard, header, sidebar
// para el fetch debo usar el useEffect y useState de react? 
// aqui quiero poner 2 columnas, una para sidebar, otra central principal y otra a la derecha vacia o con algo que aun no se ha definido



