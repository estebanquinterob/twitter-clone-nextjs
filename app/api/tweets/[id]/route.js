// tuve que crear un nuevo route.js dinamico para las paginas dinamicas, ahora que ya hago el fetch desde la base de datos y no dummy data, puedo usar este archivo para manejar las operaciones CRUD (Create, Read, Update, Delete) de tweets individuales basados en su ID.

import connectDB from "@/lib/db";
import Tweet from "@/models/Tweet";

export async function GET(_, { params }) { // uso _ para indicar que no uso el primer parametro, pero debo mantener su posicion para que funcione y accedar al segundo parametro que es el contexto con los params
    const {id} = await params; // obtener el id del tweet desde los parametros de la ruta, me daba error sin esta linea
    // antes const {id} = await params; y const tweet = await Tweet.findById(params.id);
    // el await en params y quitar el params en el findbyid fue clave para que funcionara correctamente

    await connectDB(); // conectar a la base de datos mongodb
    const tweet = await Tweet.findById(id); // obtener el tweet por su id usando params.id, aqui no debia usar params de nuevo solo id
    
    if (!tweet) {
        return Response.json( { error: "Tweet not found" }, { status: 404 } ); // devolver un error 404 si no se encuentra el tweet
    }
    return Response.json( tweet, { status: 200 } ); // devolver el tweet encontrado con estatus 200
}