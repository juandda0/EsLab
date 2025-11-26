import React from 'react';
// Importamos los íconos de redes sociales
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    // Contenedor principal del footer con fondo oscuro
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Sección superior del footer con grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Columna 1: Acerca de */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Laboratorio de Estadística y Matemáticas
            </h3>
            <p className="text-sm leading-relaxed">
              Unidad académica dedicada a la investigación, análisis de datos y modelamiento matemático, contribuyendo al desarrollo científico y social de la región desde la Universidad de Córdoba.
            </p>
          </div>
          
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/visualizador-delitos" className="hover:text-white transition-colors">
                  Visualizador de Datos
                </a>
              </li>
              <li>
                <a href="/eventos" className="hover:text-white transition-colors">
                  Agenda Académica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Repositorio Institucional
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contacto
            </h3>
            <p className="text-sm mb-2 font-semibold">Universidad de Córdoba</p>
            <p className="text-sm mb-2">Carrera 6 No. 76-103</p>
            <p className="text-sm mb-2">Montería - Córdoba, Colombia</p>
            <p className="text-sm mb-2">Email: dmatematicas@correo.unicordoba.edu.co</p>
            <p className="text-sm">Tel: +57 (604) 786 0300</p>
          </div>

        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-700 mb-8" />

        {/* Sección inferior del footer: Copyright y Redes Sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Laboratorio de Estadística y Matemáticas - Universidad de Córdoba.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/Unicordoba/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com/Unicordoba_Col" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/unicordoba_col/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/user/unicordobatv" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;