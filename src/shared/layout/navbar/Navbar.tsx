import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, User as UserIcon, LogOut } from "lucide-react";
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
  items: { title: string; url: string }[];
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
          { title: "Córdoba", url: "/" },
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
    <header className="w-full font-sans sticky top-0 left-0 z-50 bg-white shadow-md">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800">
          EstLab
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => {
            // Filtrar por rol si es necesario
            if (link.role && (!user || !link.role.includes(user.role))) return null;
            
            return (
              <li key={link.title} className="relative group">
                <a
                  href={link.url}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-200"
                >
                  {link.title}
                  {link.children && (
                    <ChevronDown
                      size={16}
                      className="text-gray-500 group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </a>

                {/* Submenús */}
                {link.children && (
                  <div
                    className="absolute left-0 top-full mt-1 min-w-[240px] 
                    bg-white shadow-lg rounded-lg opacity-0 scale-95 
                    group-hover:opacity-100 group-hover:scale-100 
                    group-hover:pointer-events-auto invisible group-hover:visible
                    transition-all duration-200 p-4 grid gap-4 z-50 border border-gray-100"
                  >
                    {link.children.map((group, i) => (
                      <div key={i}>
                        {group.groupTitle && (
                          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                            {group.groupTitle}
                          </h4>
                        )}
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.url}
                                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-md"
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
                className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shadow-sm hover:bg-green-700 transition focus:outline-none ring-2 ring-offset-2 ring-transparent hover:ring-green-200"
              >
                {/* Iniciales del usuario */}
                {user.username.charAt(0).toUpperCase()}
              </button>

              {/* Menú desplegable del perfil */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-gray-100 mb-2">
                    <p className="text-sm font-medium text-gray-900">Hola, {user.username}</p>
                    <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                  </div>
                  <button
                    onClick={handleLogoutClick}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                  >
                    <LogOut size={16} />
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLoginClick}
              className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition shadow-sm"
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
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl">
                 {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{user.username}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          )}

          {/* Links Móviles */}
          <div className="space-y-4">
            {navLinks.map((link) => {
               if (link.role && (!user || !link.role.includes(user.role))) return null;

               return (
                <div key={link.title}>
                  <a
                    href={link.url}
                    className="flex items-center justify-between text-gray-700 font-medium py-2 text-lg"
                  >
                    {link.title}
                    {link.children && <ChevronDown size={20} />}
                  </a>
                  {link.children && (
                    <div className="ml-4 mt-2 space-y-3 border-l-2 border-gray-100 pl-4">
                      {link.children.map((group, i) => (
                        <div key={i}>
                          {group.groupTitle && (
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                              {group.groupTitle}
                            </h4>
                          )}
                          <ul className="space-y-2">
                            {group.items.map((item) => (
                              <li key={item.title}>
                                <a
                                  href={item.url}
                                  className="block text-gray-600 hover:text-green-600 transition-colors"
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
          <div className="pt-6 border-t border-gray-100">
            {user ? (
              <button
                onClick={handleLogoutClick}
                className="w-full bg-red-50 text-red-600 font-medium px-4 py-3 rounded-lg hover:bg-red-100 transition flex items-center justify-center gap-2"
              >
                <LogOut size={20} />
                Cerrar sesión
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className="w-full bg-green-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-green-700 transition shadow"
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