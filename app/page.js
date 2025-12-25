"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res?.error) {
        setError("Email o contraseña incorrectos");
        setLoading(false);
        return;
      }

      // Login exitoso
      router.push("/home");
      router.refresh();
    } catch (err) {
      setError("Error al iniciar sesión");
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error al registrar");
        setLoading(false);
        return;
      }

      // Registro exitoso → login automático
      const loginRes = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (loginRes?.error) {
        setError("Registro exitoso, pero error al iniciar sesión");
        setLoading(false);
        return;
      }

      router.push("/home");
      router.refresh();
    } catch (err) {
      setError("Error de conexión");
      setLoading(false);
    }
  };


    return (
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Hero izquierdo */}
        <div className="md:w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col items-center justify-center p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
            ¡Welcome to Twitter Clone!
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center md:text-left">
            Share your thoughts, follow friends, and discover what's happening.
          </p>
        </div>
  
        {/* Formulario derecho */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
              {isRegister ? "Create Account" : "Welcome"}
            </h1>
            <p className="text-center text-gray-600 mb-6">
              {isRegister ? "Join Twitter Clone" : "Sign in to Twitter Clone"}
            </p>
  
            <div className="space-y-4">
              {isRegister && (
                <>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </>
              )}
  
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
  
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
  
              <button
                onClick={isRegister ? handleRegister : handleLogin}
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading 
                  ? "Processing..." 
                  : isRegister ? "Sign up" : "Sign in"
                }
              </button>
            </div>
  
            <button
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
                setFormData({ name: "", username: "", email: "", password: "" });
              }}
              className="w-full mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium"
            >
              {isRegister 
                ? "Already have an account? Sign In" 
                : "Don't have an account? Sign Up"
              }
            </button>
          </div>
        </div>
      </main>
    );
  }



          



  




