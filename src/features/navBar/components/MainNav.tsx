import React from 'react';

interface NavLink {
  title: string;
  url: string;
}

const navLinks: NavLink[] = [
  { title: 'Inicio', url: '/' }, // Cambiado a /
  { title: 'Visualizador delitos Córdoba', url: '/visualizador-delitos' }, 
  { title: 'Observatorio', url: '#' },
  { title: 'Bases de datos', url: '#' },
  { title: 'Datos Abierto', url: '#' },
  { title: 'Geodatos', url: '#' },
  { title: 'Líneas de investigación', url: '#' },
  { title: 'Visualizador de datos', url: '#' },
];

const MainNav: React.FC = () => {
  return (
    <div className="bg-green-600 w-full text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-center px-4 h-20">
        <nav>
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                {/* Idealmente, aquí usarías el componente <Link> de react-router-dom 
                  en lugar de <a> para la navegación interna.
                  ej: <Link to={link.url} className="..."> 
                */}
                <a
                  href={link.url}
                  className="text-sm font-medium pb-2 border-b-2 border-transparent hover:border-white transition-all duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;