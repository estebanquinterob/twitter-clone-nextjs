import Tweet from "@/models/Tweet";
import connectDB from "@/lib/db";

export async function GET() {
  await connectDB(); // conectar a la base de datos mongodb
  const tweets = await Tweet.find().sort({ createdAt: -1 }).lean(); // obtener todos los tweets ordenados por fecha de creacion descendente, el -1 indica orden descendente, tweet.find() devuelve una promesa con todos los tweets
  return Response.json( tweets, { status: 200 });// devolver los tweets en formato json con estatus 200, 200 significa que todo esta ok
} 

