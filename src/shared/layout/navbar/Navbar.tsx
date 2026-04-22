import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../../features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface NavLink {
  title: string;
  url: string;
  children?: SubMenuGroup[];
  role?: string[];
}

interface SubMenuGroup {
  groupTitle?: string;
  items: { title: string; url: string; download?: boolean }[];
}

const navLinks: NavLink[] = [
  {
    title: "Visualizador",
    url: "#",
    children: [
      {
        groupTitle: "Trabajos de aula",
        items: [
          { title: "Salud", url: "/" },
          { title: "Economía", url: "/" },
          { title: "Social", url: "/" },
          { title: "Seguridad", url: "/" },
        ],
      },
      {
        groupTitle: "Mapas geoespaciales",
        items: [
          { title: "Córdoba", url: "/visualizador/cordoba" },
          { title: "Municipios", url: "/" },
          { title: "Subregiones", url: "/" },
        ],
      },
    ],
  },
  {
    title: "Líneas de investigación",
    url: "/",
    children: [
      {
        items: [
          { title: "Modelos mixtos", url: "/" },
          { title: "Análisis parcial", url: "/" },
          { title: "Analítica de Datos", url: "/" },
          { title: "Inteligencia Artificial", url: "/" },
        ],
      },
    ],
  },
  {
    title: "Base de datos",
    url: "/",
    children: [
      {
        items: [
          { title: "SIEDCO", url: "/" },
          { title: "Instituto Nacional de Salud", url: "/" },
          { title: "Ministerio de Salud y Protección Social", url: "/" },
          { title: "DANE", url: "/" },
          { title: "Datos Abiertos", url: "/" },
        ],
      },
    ],
  },
  {
    title: "Eventos",
    url: "/eventos",
    children: [
      {
        items: [
          { title: "Aula Académica", url: "/" },
          { title: "Cree en tí", url: "/" },
        ],
      },
    ],
  },
  // --- Nuevas Opciones (Gestión de Proyectos) ---
  { 
    title: "Mis Proyectos", 
    url: "/mis-proyectos",
    role: ["user", "supervisor", "admin"]
  },
  { 
    title: "Panel Admin", 
    url: "/admin/proyectos",
    role: ["admin"]
  },
  { 
    title: "Panel Supervisor", 
    url: "/supervisor/proyectos",
    role: ["supervisor", "admin"]
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false); // Estado para el menú del perfil
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    setProfileOpen(false);
    logout();
    navigate("/");
  };

  // Cierra el menú de perfil si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full font-sans fixed top-0 left-0 z-[1001] bg-white/80 backdrop-blur-md border-b border-[#d2d2d7]/30">
      <nav className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tighter text-[#1d1d1f] hover:opacity-80 transition-opacity">
          LAGeo
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => {
            // Filtrar por rol si es necesario
            if (link.role && (!user || !link.role.includes(user.role))) return null;
            
            return (
              <li key={link.title} className="relative group">
                <a
                  href={link.url}
                  className="flex items-center text-[15px] font-bold text-[#1d1d1f] px-6 py-2.5 rounded-lg hover:bg-[#f5f5f7] transition-all duration-200"
                >
                  {link.title}
                </a>

                {/* Submenús - Estilo Editorial Dropdown */}
                {link.children && (
                  <div
                    className="absolute left-0 top-full mt-1 min-w-[280px] 
                    bg-white shadow-2xl rounded-xl opacity-0 scale-95 
                    group-hover:opacity-100 group-hover:scale-100 
                    group-hover:pointer-events-auto invisible group-hover:visible
                    transition-all duration-300 p-8 grid gap-8 z-50 border border-[#d2d2d7]/30"
                  >
                    {link.children.map((group, i) => (
                      <div key={i}>
                        {group.groupTitle && (
                          <h4 className="text-[11px] font-bold text-[#86868b] uppercase tracking-[0.15em] mb-4 border-b border-[#f5f5f7] pb-1">
                            {group.groupTitle}
                          </h4>
                        )}
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.url}
                                download={item.download ? true : undefined}
                                className="block px-2 py-2 text-[14px] text-[#424245] hover:text-[#16a34a] transition-colors"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Sección de Usuario (Desktop) */}
        <div className="hidden lg:block ml-4">
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-lg bg-[#16a34a] text-white flex items-center justify-center text-[14px] font-bold shadow-sm hover:bg-[#15803d] transition-all focus:outline-none"
              >
                {user.username.charAt(0).toUpperCase()}
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl py-5 border border-[#d2d2d7]/30 z-50 animate-in fade-in slide-in-from-top-3 duration-300">
                  <div className="px-6 py-4 border-b border-[#f5f5f7] mb-2">
                    <p className="text-sm font-bold text-[#1d1d1f]">Hola, {user.username}</p>
                    <p className="text-[10px] text-[#86868b] uppercase tracking-wider font-semibold mt-0.5">{user.role}</p>
                  </div>
                  <button
                    onClick={handleLogoutClick}
                    className="w-full text-left px-6 py-3 text-[14px] text-[#ff3b30] hover:bg-[#ff3b30]/5 transition-colors font-semibold"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLoginClick}
              className="bg-[#16a34a] text-white px-6 py-2.5 rounded-lg text-[15px] font-bold hover:bg-[#15803d] transition-all shadow-lg active:scale-95"
            >
              Iniciar sesión
            </button>
          )}
        </div>

        {/* Botón móvil */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-6 space-y-6 h-screen overflow-y-auto pb-20">
          
          {/* Perfil en móvil (si está logueado) */}
          {user && (
            <div className="flex items-center gap-4 pb-6 border-b border-[#f5f5f7]">
              <div className="w-14 h-14 rounded-lg bg-[#16a34a] text-white flex items-center justify-center font-bold text-xl shadow-sm">
                 {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-lg font-bold text-[#1d1d1f]">{user.username}</p>
                <p className="text-[10px] text-[#86868b] uppercase tracking-widest font-bold">{user.role}</p>
              </div>
            </div>
          )}

          {/* Links Móviles */}
          <div className="space-y-2">
            {navLinks.map((link) => {
               if (link.role && (!user || !link.role.includes(user.role))) return null;

               return (
                <div key={link.title} className="py-2">
                  <a
                    href={link.url}
                    className="flex items-center justify-between text-[#1d1d1f] font-bold py-2 text-xl tracking-tight"
                  >
                    {link.title}
                  </a>
                  {link.children && (
                    <div className="ml-4 mt-2 space-y-4 border-l border-[#d2d2d7] pl-6 py-2">
                      {link.children.map((group, i) => (
                        <div key={i}>
                          {group.groupTitle && (
                            <h4 className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-3">
                              {group.groupTitle}
                            </h4>
                          )}
                          <ul className="space-y-3">
                            {group.items.map((item) => (
                              <li key={item.title}>
                                <a
                                  href={item.url}
                                  download={item.download ? true : undefined}
                                  className="block text-[#424245] hover:text-[#16a34a] transition-colors text-base font-medium"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
               );
            })}
          </div>

          {/* Botones de acción móvil */}
          <div className="pt-8 border-t border-[#f5f5f7]">
            {user ? (
              <button
                onClick={handleLogoutClick}
                className="w-full bg-[#ff3b30]/10 text-[#ff3b30] font-bold px-4 py-4 rounded-lg hover:bg-[#ff3b30]/20 transition flex items-center justify-center"
              >
                Cerrar sesión
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className="w-full bg-[#16a34a] text-white font-bold px-4 py-4 rounded-lg hover:bg-[#15803d] transition shadow-lg"
              >
                Iniciar sesión
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}