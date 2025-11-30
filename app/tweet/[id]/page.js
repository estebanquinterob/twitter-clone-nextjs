import TweetDetailClient from "./TweetDetailClient";

export default async function TweetPage({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/tweets/${id}`, { cache: "no-store" });

  const tweet = await res.json();

  return (
    <TweetDetailClient initialTweet={tweet} />
  )
}

// import TweetCard from "@/components/TweetCard";
// import CommentForm from "@/components/CommentForm";
// import CommentList from "@/components/CommentList";

// export default async function TweetPage({ params }) {
//   const { id } = await params; // obtener el id del tweet desde los parametros de la ruta en next debo poner el await para que no de error de promesa no resuelta, porque se mezclan cosas de client en un compoenente server

//   const res = await fetch(`http://localhost:3000/api/tweets/${id}`, { cache: "no-store" }); // no-store para evitar cache y siempre obtener datos frescos
//   const tweet = await res.json();

//   console.log("tweet en server component:", tweet);
//   return (
//       <main className="h-dvh">
//         <TweetCard tweet={tweet} />
//         <div>
//           <CommentForm />
//           <CommentList />
//         </div>
//       </main>
//   );
// }

// los dos aside los cambiaria por componentes, pero aun no defino que pondre en ellos
// en esta pagina me gustaria que se pudiera comentar, luego veremos como almacenarlos asi que la idea es que se almacenen y luego se muestre la cantidad de comentarios que tiene, en la tweetCard