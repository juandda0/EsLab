import React from 'react';
import InfoIcon from './components/InfoIcon';
// Importamos los íconos de Font Awesome a través de react-icons
import { FaUser, FaListAlt, FaSyncAlt } from 'react-icons/fa';

const InformateSection: React.FC = () => {
  return (
    // Contenedor de la sección con fondo azul
    <section className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-green-600 py-16 ">
      <div className="flex flex-col px-4">
        {/* Título de la sección */}
        <h2 className="text-4xl font-bold text-center text-white mb-24">
          Infórmate
        </h2>

        {/* Grid para los tres elementos, centrado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Usamos el componente reutilizable */}
          <InfoIcon
            icon={<FaUser />}
            label="El secretario"
          />
          <InfoIcon
            icon={<FaListAlt />}
            label="Funciones"
          />
          <InfoIcon
            icon={<FaSyncAlt />}
            label="Circulares"
          />
        </div>
      </div>
    </section>
  );
};

export default InformateSection;