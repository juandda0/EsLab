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
              Observatorio del Delito
            </h3>
            <p className="text-sm">
              Generando y difundiendo conocimiento sobre el delito en Córdoba para orientar la toma de decisiones en políticas públicas.
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
                  Visualizador Delitos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bases de datos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Datos Abiertos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Contacto
            </h3>
            <p className="text-sm mb-2">Gobernación de Córdoba</p>
            <p className="text-sm mb-2">Dirección: Calle 27 #3-28, Montería</p>
            <p className="text-sm mb-2">Email: contacto@observatorio.gov.co</p>
            <p className="text-sm">Tel: +57 (604) 789 1234</p>
          </div>

        </div>

        {/* Línea divisoria */}
        <hr className="border-gray-700 mb-8" />

        {/* Sección inferior del footer: Copyright y Redes Sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Observatorio del Delito de Córdoba. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;