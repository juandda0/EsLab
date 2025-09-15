import React from 'react';

// 1. Añade la propiedad 'description' a la interfaz
interface InfoCardProps {
  title: string;
  description: string; 
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg flex w-full max-w-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Sección de la Imagen (ahora un poco más pequeña para dar espacio al texto) */}
      <div className="w-1/3">
      </div>

      {/* Sección del Texto (ahora ocupa más espacio) */}
      <div className="w-2/3 flex flex-col justify-center p-6">
        <h3 className="text-2xl font-semibold text-green-800 mb-2">{title}</h3>
        {/* 2. Muestra el párrafo de descripción */}
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;