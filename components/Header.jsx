"use client"; // antes no estaba use client y no se podria usar el hookde useSession

import NavLink from "./NavLink";
import { useSession, signOut, signIn } from "next-auth/react"; // esto no se podria importar sin el "use client"

export default function Header() {
    const { data: session } = useSession(); // obtenemos la sesion del usuario
    // Si hay sesión: session.user.username existe. Si no: session === null

    return (
        <div className="p-8 bg-blue-500 text-amber-50 flex justify-between items-center">
            <h1 className="text-xl font-bold">My Twitter Clone</h1>
            <nav>
                <ul className="flex md:gap-6 sm:gap-2">
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    {/* si el usuario esta logueado, mostramos el link al perfil */}
                    {session ? (
                        <button
                            className="text-white underline"
                            onClick={() => signOut({ callbackUrl: "/login" })}
                        >
                            Log out
                        </button>
                    ) : (
                        <button
                            className="text-white underline"
                            onClick={() => signIn()}
                        >
                            Log in
                        </button>
                    )}
                </ul>
            </nav>
        </div>
    );
}

// h1 --> titulo mas grande o logo
// el header con un color de fondo y el main con un degradado de colores claros
// voy a usar pathname para saber en que pagina estoy y cambiar el color del link correspondiente o alguna caracteristica para resaltar
