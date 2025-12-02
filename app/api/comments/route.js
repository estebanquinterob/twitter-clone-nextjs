import connectDB from "@/lib/db";
import mongoose from "mongoose";

export async function POST(req) {
  await connectDB();

  const { tweetId, user, content } = await req.json();

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

  const tweetId = req.nextUrl.searchParams.get("tweetId");

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
