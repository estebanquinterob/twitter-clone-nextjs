import TweetCard from "@/components/TweetCard";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";

export default async function TweetPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  const tweet = await res.json();


  return (
      <main className="h-dvh">
        <TweetCard tweet={tweet} />
        <div>
          <CommentForm />
          <CommentList />
        </div>
      </main>
  );
}

// los dos aside los cambiaria por componentes, pero aun no defino que pondre en ellos
// en esta pagina me gustaria que se pudiera comentar, luego veremos como almacenarlos asi que la idea es que se almacenen y luego se muestre la cantidad de comentarios que tiene, en la tweetCard