import React from 'react';

interface InfoIconProps {
  // Acepta un elemento de React, como un ícono
  icon: React.ReactElement;
  label: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ icon, label }) => {
  return (
    // Enlace con efectos de hover
    <a 
      href="#" 
      className="flex flex-col items-center gap-4 group transition-transform hover:-translate-y-1"
    >
      {/* Contenedor del ícono */}
      <div className="text-white text-6xl group-hover:text-gray-200 transition-colors duration-300">
        {icon}
      </div>
      {/* Etiqueta de texto */}
      <span className="text-white font-medium text-lg group-hover:text-gray-200 transition-colors duration-300">
        {label}
      </span>
    </a>
  );
};

export default InfoIcon;