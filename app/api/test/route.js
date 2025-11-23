import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Tweet from "@/models/Tweet";

export async function GET() {
  try {
    // 1️⃣ Conectamos a la base de datos
    await connectDB();

    // 2️⃣ Buscamos todos los tweets en la colección
    const tweets = await Tweet.find();

    // 3️⃣ Devolvemos los tweets en formato JSON
    return NextResponse.json(tweets);
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
    return NextResponse.json(
      { error: "Error al conectar con la base de datos" },
      { status: 500 }
    );
  }
}
