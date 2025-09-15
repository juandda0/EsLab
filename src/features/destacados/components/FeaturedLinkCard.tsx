import React from 'react';

interface FeaturedLinkCardProps {
  icon: React.ReactElement;
  title: string;
  // Prop para definir el color de fondo del ícono
  bgColor: string; 
}

const FeaturedLinkCard: React.FC<FeaturedLinkCardProps> = ({ icon, title, bgColor }) => {
  return (
    // Enlace con sombra y efecto hover, similar a tus otras tarjetas
    <a 
      href="#" 
      className="flex rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
    >
      {/* Sección del Ícono con color de fondo dinámico */}
      <div className={`w-1/3 p-6 flex items-center justify-center ${bgColor} transition-all duration-300`}>
        <div className="text-white text-5xl">
          {icon}
        </div>
      </div>
      
      {/* Sección del Texto */}
      <div className="w-2/3 p-6 bg-white flex items-center">
        <span className="text-gray-700 font-semibold text-lg group-hover:text-blue-800 transition-colors duration-300">
          {title}
        </span>
      </div>
    </a>
  );
};

export default FeaturedLinkCard;