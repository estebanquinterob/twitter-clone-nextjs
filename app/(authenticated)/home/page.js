import TweetList from "@/components/TweetList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";

async function fetchTweets() {
  try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tweets`, {
    // cache: "no-store" en lugar de localhost para produccion
    const response = await fetch("http://localhost:3000/api/tweets", { cache: "no-store"}); // cache es para que siempre traiga los tweets actualizados

    if (!response.ok) {
      console.error("Error fetching tweets:", response.statusText);
      return [];
    }

    return await response.json();
    // const tweets = await response.json();
    // return tweets;
    
  } catch (error) {
    console.error("Error getting Tweets:", error);
    return [];
  }
} 


export default async function HomePage() { 
    
    const session = await getServerSession(authOptions); // obtener la sesion en el server component

    const tweets = await fetchTweets();


    return (
        <main>
            <article className="p-6">
                <h1 className="text-center font-bold m-4 text-xl">Welcome, { session.user.name }!</h1>
                <TweetList initialTweets={tweets} />
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

