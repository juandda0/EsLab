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
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] px-6 py-20">
      <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-white/20 w-full max-w-lg text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#16a34a]"></div>
        
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tighter text-[#1d1d1f] mb-3">
            Inicia Sesión
          </h1>
          <p className="text-[#86868b] text-lg font-medium leading-tight">
            Accede al ecosistema digital <br /> de GeoLab Córdoba.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left space-y-1.5">
            <label className="text-[10px] font-black text-[#86868b] uppercase tracking-widest ml-1">Usuario</label>
            <input
              type="text"
              placeholder="nombre@ejemplo.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7]/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#16a34a]/10 focus:border-[#16a34a] transition-all text-[#1d1d1f] font-bold"
              required
            />
          </div>
          
          <div className="text-left space-y-1.5">
            <label className="text-[10px] font-black text-[#86868b] uppercase tracking-widest ml-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7]/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#16a34a]/10 focus:border-[#16a34a] transition-all text-[#1d1d1f] font-bold"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1d1d1f] text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl active:scale-95 mt-6"
          >
            Entrar al Sistema
          </button>
        </form>

        {/* Guía de Testing */}
        <div className="mt-12 p-6 bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7]/50">
          <p className="text-[9px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-4">Cuentas de Acceso (Testing)</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { role: 'Admin', user: 'admin' },
              { role: 'Supervisor', user: 'supervisor' },
              { role: 'Usuario', user: 'user' }
            ].map(item => (
              <div key={item.user} className="text-center">
                <div className="text-[10px] font-black text-[#1d1d1f]">{item.role}</div>
                <div className="text-[10px] text-[#86868b] bg-white px-2 py-1 rounded-full mt-1 border border-gray-200">"{item.user}"</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a href="/" className="text-xs font-black uppercase tracking-widest text-[#86868b] hover:text-[#16a34a] transition-colors">
            ← Volver al Portal Principal
          </a>
        </div>
      </div>
    </div>
  );
};
