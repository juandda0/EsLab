import React from "react";
import heroImage from "../assets/heroestadistica.jpg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full py-30 bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 text-white">
        {/* Texto */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-sans text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Laboratorio de Estadística <br /> y Ciencia de Datos
          </h1>
          <p className="text-lg max-w-xl mx-auto md:mx-0 drop-shadow-md">
            Impulsamos la investigación y el análisis de datos para resolver
            problemas sociales, económicos y de seguridad, generando impacto en
            la región de Córdoba.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#explore"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Explorar
            </a>
            <a
              href="#learn-more"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
