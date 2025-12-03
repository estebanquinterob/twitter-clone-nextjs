import connectDB from "@/lib/db";
import mongoose from "mongoose";

export async function POST(req) {
  await connectDB();

  const { tweetId, user, content } = await req.json(); // convierte el cuerpo del request (lo que envia el formulario) en un objeto JS, y que tome esas propiedades de lo que esta llegando (destructuring). "Del JSON que recibo del front, toma exactamente las propiedades: tweetId, user y content".

  if (!tweetId || !content) {
    return Response.json(
      { error: "TweetId y content son obligatorios" },
      { status: 400 }
    );
  }

  const commentsCollection = mongoose.connection.collection("comments");

  const newComment = {
    tweetId,
    user: user || "Anónimo",
    content,
    createdAt: new Date(),
  };

  await commentsCollection.insertOne(newComment);

  return Response.json(newComment, { status: 201 });
}


export async function GET(req) {
  await connectDB();

  const tweetId = req.nextUrl.searchParams.get("tweetId"); // Saca de la URL el valor del parámetro tweetId.

  if (!tweetId) {
    return Response.json({ error: "tweetId requerido" }, { status: 400 });
  }

  const commentsCollection = mongoose.connection.collection("comments");

  const comments = await commentsCollection
    .find({ tweetId })
    .sort({ createdAt: -1 })
    .toArray();

  return Response.json(comments, { status: 200 });
}
