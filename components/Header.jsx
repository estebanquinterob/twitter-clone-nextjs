"use client"; // antes no estaba use client y no se podria usar el hookde useSession

import NavLink from "./NavLink";
import { signOut } from "next-auth/react"; // esto no se podria importar sin el "use client"

export default function Header({ user }) {
    // obtenemos la sesion del usuario
    // Si hay sesión: session.user.username existe. Si no: session === null

    return (
        <div className="p-8 bg-blue-500 text-amber-50 flex justify-between items-center sticky top-0 z-50 shadow-md">
            <h1 className="text-xl font-bold">My Twitter Clone</h1>
            <nav className="flex items-center gap-6">
                <NavLink href="/home" className="hover:underline">
                    Home
                </NavLink>
                <NavLink href="/about" className="hover:underline">
                    About
                </NavLink>
                
                <div className="flex items-center gap-5">
                    <span className="text-sm">
                        Hi, <strong>{user.name}</strong>
                    </span>
                    <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="bg-blue-700 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                    >
                        Log out
                    </button>
                </div>
            </nav>        </div>
    );
}

// h1 --> titulo mas grande o logo
// el header con un color de fondo y el main con un degradado de colores claros
// voy a usar pathname para saber en que pagina estoy y cambiar el color del link correspondiente o alguna caracteristica para resaltar
