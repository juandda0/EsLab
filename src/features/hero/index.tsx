import React from "react";
import heroImage from "./assets/heroestadistica.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-[100vh] bg-white flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        
        {/* Texto */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Laboratorio de Estadística <br /> y Ciencia de Datos
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0">
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
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Más información
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Investigadores en el campo"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
