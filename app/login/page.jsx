"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [showRegister, setShowRegister] = useState(false); // modal
    const [regName, setRegName] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regError, setRegError] = useState("");   

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const result = await signIn("credentials", {
        redirect: false, // no redirigir automáticamente
        email,
        password,
        });

        if (result.error) {
            setError("Email o contraseña incorrectos");
        } else {
            router.push("/home"); // redirige al home si todo ok
        }
    };

    // register
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                name: regName,
                username: regUsername,
                email: regEmail,
                password: regPassword,
                }),
        });
            const data = await res.json();
            if (!res.ok) setRegError(data.message || "Error en registro");
            else setShowRegister(false); // cerrar modal al registrar
        } catch (err) {
            setRegError("Error del servidor");
        }
  };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-50">
        {/* login form */}
            <form
                onSubmit={handleLogin}
                className={`bg-white p-8 rounded shadow-md w-80 transition-all ${
                    showRegister ? "blur-sm" : ""
                }`}>

                <h1 className="text-xl font-bold mb-4 text-center">Login</h1>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <input
                type="email"
                placeholder="Email"
                className="border p-2 mb-4 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type="password"
                placeholder="Password"
                className="border p-2 mb-4 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 w-full rounded">
                    Login
                </button>

                <p className="text-sm mt-4 text-center">
                    No tienes cuenta?{" "}
                    <button
                        type="button"
                        onClick={() => setShowRegister(true)}
                        className="underline text-blue-600">
                        Sign up
                    </button>
                </p>
            </form>

            {/* Modal Register */}
            {showRegister && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <form
                    onSubmit={handleRegister}
                    className="bg-white p-8 rounded shadow-md w-80 relative z-10"
                >
                    <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
                    {regError && <p className="text-red-500 mb-2">{regError}</p>}

                    <input
                    type="text"
                    placeholder="Nombre"
                    className="border p-2 mb-4 w-full"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Username"
                    className="border p-2 mb-4 w-full"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 mb-4 w-full"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 mb-4 w-full"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    />

                    <button
                    type="submit"
                    className="bg-green-500 text-white p-2 w-full rounded"
                    >
                    Register
                    </button>

                    <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={() => setShowRegister(false)}
                    >
                    ✕
                    </button>
                </form>
            </div>
            )}
        </div>
    );
}
