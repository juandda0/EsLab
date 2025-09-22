import React from "react";

interface SubMenuGroup {
  groupTitle?: string;
  items: { title: string; url: string }[];
}

interface NavLink {
  title: string;
  url: string;
  children?: SubMenuGroup[];
}

const navLinks: NavLink[] = [
  { title: "Inicio", url: "/" },
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
          {
            title: "Analisis parcial",
            url: "/",
          },
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
          {
            title: "Instituto Nacional de Salud",
            url: "/",
          },
          {
            title: "Ministerio de Salud y Protección Social",
            url: "/",
          },
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
          { title: "Aula Academica", url: "/" },
          { title: "Cree en tí", url: "/" },
        ],
      },
    ],
  },
];

const MainNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800">
          EstLab
        </a>

        {/* Links */}
        <ul className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.title} className="relative group">
              <a
                href={link.url}
                className="text-md font-medium text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-200"
              >
                {link.title}
              </a>

              {/* Submenús */}
              {link.children && (
                <div
                  className="absolute left-0 top-full translate-y-1 min-w-[240px] 
             bg-white shadow-lg rounded-lg opacity-0 scale-95 
             group-hover:opacity-100 group-hover:scale-100 
             pointer-events-none group-hover:pointer-events-auto 
             transition-all duration-200 p-4 grid gap-4"
                >
                  {link.children.map((group) => (
                    <div key={group.groupTitle}>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                        {group.groupTitle}
                      </h4>
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
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
