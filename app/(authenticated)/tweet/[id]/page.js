import TweetDetailClient from "./TweetDetailClient";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TweetPage({ params }) {
  const { id } = await params;

  const session = await getServerSession(authOptions); // obtener la sesion en el server component

  const res = await fetch(`http://localhost:3000/api/tweets/${id}`, { cache: "no-store" });

  const tweet = await res.json();

  return (
    <TweetDetailClient initialTweet={tweet} />
  )
}

// tengo la pregunta de la implementacion del getserversession, pero el id lo tengo entre server y client


// los dos aside los cambiaria por componentes, pero aun no defino que pondre en ellos
// en esta pagina me gustaria que se pudiera comentar, luego veremos como almacenarlos asi que la idea es que se almacenen y luego se muestre la cantidad de comentarios que tiene, en la tweetCard