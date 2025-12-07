import { NextResponse } from 'next/server';
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    
    const { name, username, email, password } = await req.json();

    // Validaciones
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Verificar si ya existe
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: "Email o username ya registrado" },
        { status: 400 }
      );
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Crear usuario
    const newUser = await User.create({ 
      name, 
      username: username || email.split('@')[0], // username por defecto
      email, 
      password: hashedPassword 
    });

    return NextResponse.json(
      { 
        message: "Usuario creado exitosamente",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error en registro:", error);
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 500 }
    );
  }
}



// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import connectDB from "@/lib/db";
// import User from "@/models/User";

// export async function POST(req) {
//   try {
//     const { name, username, email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         { message: "Email y contraseña son requeridos" },
//         { status: 400 }
//       );
//     }

//     await connectDB();

//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return NextResponse.json(
//         { message: "El usuario ya existe" },
//         { status: 400 }
//       );
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       username,
//       email,
//       password: hashedPassword,
//     });

//     return NextResponse.json(
//       { message: "Usuario creado", user },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error en el servidor" },
//       { status: 500 }
//     );
//   }
// }
