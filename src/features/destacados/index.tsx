import React from 'react';
import FeaturedLinkCard from './components/FeaturedLinkCard';
// Importamos los íconos necesarios
import { FaHeartbeat, FaFileAlt, FaTasks } from 'react-icons/fa';

const DestacadosSection: React.FC = () => {
  return (
    // Contenedor de la sección con fondo blanco
    <section className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Título de la sección, usando el mismo azul que la sección anterior */}
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-24">
          Destacados
        </h2>

        {/* Grid para las 3 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeaturedLinkCard
            icon={<FaHeartbeat />}
            title="Ítem"
            bgColor="bg-cyan-500" // Azul claro
          />
          <FeaturedLinkCard
            icon={<FaFileAlt />}
            title="Ítem"
            bgColor="bg-blue-800" // Azul oscuro
          />
          <FeaturedLinkCard
            icon={<FaTasks />}
            title="Ítem"
            bgColor="bg-gray-700" // Azul/Gris muy oscuro
          />
        </div>

        {/* Paginador visual (no funcional) para imitar la imagen */}
        <div className="flex justify-center space-x-2 mt-12">
          <span className="w-3 h-3 bg-blue-800 rounded-full cursor-pointer"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></span>
        </div>
      </div>
    </section>
  );
};

export default DestacadosSection;