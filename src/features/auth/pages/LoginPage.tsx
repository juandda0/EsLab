import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(username, password);

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] px-6">
      <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-[#d2d2d7]/50 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-2">
          Bienvenido
        </h1>
        <p className="text-[#86868b] font-medium mb-10">
          Inicia sesión para acceder al panel de EstLab
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16a34a]/20 focus:border-[#16a34a] transition-all text-[#1d1d1f] placeholder:text-[#86868b]"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16a34a]/20 focus:border-[#16a34a] transition-all text-[#1d1d1f] placeholder:text-[#86868b]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#16a34a] text-white py-4 rounded-full font-bold hover:bg-[#15803d] transition-all shadow-md active:scale-[0.98] mt-4"
          >
            Entrar
          </button>
        </form>

        <div className="mt-8">
          <a href="/" className="text-sm font-medium text-[#86868b] hover:text-[#16a34a] transition-colors">
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};
