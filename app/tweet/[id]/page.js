import TweetCard from "@/components/TweetCard";

export default async function TweetPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  const tweet = await res.json();


  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 p-6">
      <aside className="bg-gray-100 p-4 rounded-lg order-2 md:order-1">Left Sidebar</aside>
      <article className="p-6 order-1 md:order-2">
        <TweetCard tweet={tweet} />
       </article>
      <aside className="bg-gray-100 p-4 rounded-lg order-3 md:order-3">Right Sidebar</aside>

    </main>
  );
}

// los dos aside los cambiaria por componentes, pero aun no defino que pondre en ellos
// en esta pagina me gustaria que se pudiera comentar, luego veremos como almacenarlos asi que la idea es que se almacenen y luego se muestre la cantidad de comentarios que tiene, en la tweetCard