import Tweet from "@/models/Tweet";
import connectDB from "@/lib/db";

export async function GET() {
  await connectDB(); // conectar a la base de datos mongodb
  const tweets = await Tweet.find().sort({ createdAt: -1 }).lean(); // obtener todos los tweets ordenados por fecha de creacion descendente, el -1 indica orden descendente, tweet.find() devuelve una promesa con todos los tweets
  return Response.json( tweets, { status: 200 });// devolver los tweets en formato json con estatus 200, 200 significa que todo esta ok
} 

export async function POST(request) {
  try {
    await connectDB(); // conectar a la base de datos de mongodb

    const body = await request.json(); // obtener la informacion de la solicitud en formato json
    const newTweet = await Tweet.create(body); // crear un nuevo tweet con la informacion del cuerpo de la solicitud
    return Response.json( newTweet, { status: 201 } ); // devolver el nuevo tweet creado con estatus 201, 201 significa que se ha creado un recurso

  } catch (error) {
    console.error("Error creating tweet:", error);
    return Response.json( { error: "Error creating tweet" }, { status: 500 } ); // devolver un error con estatus 500, 500 significa error del servidor
  }
}
