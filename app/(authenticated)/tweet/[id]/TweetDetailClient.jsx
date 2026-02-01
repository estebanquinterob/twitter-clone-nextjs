// "use client";

// import { useState } from "react";
// import TweetCard from "@/components/TweetCard";
// import CommentForm from "@/components/CommentForm";
// import CommentList from "@/components/CommentList";

// export default function TweetDetailClient({ initialTweet }) {
//     const [comments, setComments] = useState(initialTweet.comments || []); // si initialTweet.comments es null, undefined, o falsy → usa un array vacío, evita erros si aun no hay comentarios

//     function handleCommentCreated(newComment) {
//         setComments((prevComments) => [newComment, ...prevComments]); // agrega el nuevo comentario al inicio del array de comentarios
//     }

//     return (
//         <main className="h-dvh">
//             <TweetCard tweet={{ ...initialTweet, commentsCount: comments.length }} /> {/* el comments.lenght aun no lo he implementado */}
//             <div>
//                 <CommentForm tweetId={initialTweet._id} onCommentCreated={handleCommentCreated} />
//                 <CommentList comments={comments} />
//             </div>
//         </main>
//     );

// }

"use client";

import { useState, useEffect } from "react";
import TweetCard from "@/components/TweetCard";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { useSession } from "next-auth/react";

export default function TweetDetailClient({ initialTweet, session: sessionFromServer }) {
  const [comments, setComments] = useState([]);
  const { data: session } = useSession();

  // preferimos usar la sesión del cliente si está disponible, sino usamos la del servidor
  const currentUser = session || sessionFromServer;

  // cargar comentarios al inicio
  async function loadComments() {
    const res = await fetch(`/api/comments?tweetId=${initialTweet._id}`);
    const data = await res.json();
    setComments(data);
  }

  // useEffect(() => {
  //   loadComments();
  // }, []);
  useEffect(() => {
    // Ejecutar solo cuando tengamos el id del tweet
    if (initialTweet?._id) {
      loadComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTweet?._id]);


  function handleCommentCreated() {
    loadComments(); // recargar comentarios cuando se crea uno nuevo
  }

  return (
    <main className="p-4 min-h-screen">
      <TweetCard tweet={initialTweet} />

      <CommentForm
        tweetId={initialTweet._id}
        onCommentCreated={handleCommentCreated} // Es una función que el padre le pasa al hijo para que el hijo pueda avisar cuando algo sucede
        user={currentUser?.user} // le pasamos el usuario actual al formulario de comentarios
      />

      <CommentList comments={comments} />
    </main>
  );
}
