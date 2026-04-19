import React from 'react';
// Importamos los íconos de redes sociales
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    // Contenedor principal del footer con fondo oscuro
    <footer className="bg-[#f5f5f7] text-[#86868b] py-20 border-t border-[#d2d2d7]/50">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 tracking-tight">
              EstLab
            </h3>
            <p className="text-[13px] leading-relaxed font-medium">
              Laboratorio de Estadística y Ciencia de Datos de la Universidad de Córdoba. Investigación impulsada por datos para el progreso regional.
            </p>
          </div>
          
          <div>
            <h3 className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-widest mb-6">
              Explorar
            </h3>
            <ul className="space-y-3 text-[13px] font-medium">
              <li><a href="/" className="hover:text-[#16a34a] transition-colors">Inicio</a></li>
              <li><a href="/visualizador/cordoba" className="hover:text-[#16a34a] transition-colors">Mapas Interactivos</a></li>
              <li><a href="/eventos" className="hover:text-[#16a34a] transition-colors">Agenda Académica</a></li>
              <li><a href="#" className="hover:text-[#16a34a] transition-colors">Repositorio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-widest mb-6">
              Contacto
            </h3>
            <ul className="space-y-2 text-[13px] font-medium">
              <li>Universidad de Córdoba</li>
              <li>Carrera 6 No. 76-103</li>
              <li>Montería, Colombia</li>
              <li className="pt-2 text-[#16a34a]">dmatematicas@correo.unicordoba.edu.co</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold text-[#1d1d1f] uppercase tracking-widest mb-6">
              Síguenos
            </h3>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/Unicordoba/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com/Unicordoba_Col" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.instagram.com/unicordoba_col/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.youtube.com/user/unicordobatv" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#d2d2d7]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-medium uppercase tracking-tight">
          <p>
            &copy; {new Date().getFullYear()} Laboratorio de Estadística y Matemáticas — Universidad de Córdoba.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;