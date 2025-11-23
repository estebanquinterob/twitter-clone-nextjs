import dotenv from "dotenv"; //es una libreria de node para manejar variables de entorno desde un archivo .env o .env.local en nextjs


import connectDB from "../lib/db.js";
import Tweet from "../models/Tweet.js";
import fs from "fs";
import path from "path";

dotenv.config(); //Buscar un archivo .env o .env.local en la raíz del proyecto, no se si sea necesario poner esta linea si ya puse la de abajo
dotenv.config({ path: path.resolve(".env.local") }); // Cargar variables de entorno desde .env.local si existe, antes de hacer esto solo leia .env por eso no tomaba la variable de entorno de MONGODB_URI y toco hacer esta linea de codigo

// leer el los tweets desde el json, me daba un error al usar import tweets desde data por eso uso fs y path
const filePath = path.resolve("./data/dummytweets.json");
const tweets = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const seed = async () => {
    try {
        console.log("MONGODB_URI:", process.env.MONGODB_URI);

        await connectDB(); // conectar a la base de datos
        // MAPEAR LOS TWEETS AL ESQUEMA REAL hubo un problema con los nombres de las propiedades en dummytweets.json no eran los mismo que en el modelo Tweet.js en el esquema
        const mappedTweets = tweets.map(t => ({
            user: String(t.userId) || "Anon",
            content: t.body || t.title || "No content",
            tags: t.tags || [],
            reactions: t.reactions || { likes: 0, dislikes: 0 },
            views: t.views || 0,
        }));

        await Tweet.create(mappedTweets); // crear tweets en la base de datos usando el modelo Tweet y los datos de dummytweets.json
        
        console.log("Tweets insertados correctamente"); // se muestra el mensaje de exito
        process.exit(0); // terminar el script (opcional)

    } catch (error) {
        console.error("Error insertando tweets:", error); // mostrar el error si hay
        process.exit(1); // terminar el script con error (opcional)
    }
};

seed();

// aqui en este archivo me conecto con la base de datos usando la funcion connectDB importada de lib/db.js para alimentarla con la informacion de dummy tweets que pegue en data dummytweets.json