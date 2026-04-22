import React from "react";
import heroImage from "../assets/heroestadistica.jpg";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="w-full py-40 md:py-60 flex items-center justify-center relative overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Sophisticated Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Laboratorio de Análisis Geoespacial <br /> 
            <span className="">y Ciencia de Datos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Impulsamos la investigación avanzada y el análisis de datos para transformar 
            realidades sociales, económicas y de seguridad en la región.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href="#explore"
              className="w-full sm:w-auto bg-[#16a34a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#15803d] transition-all shadow-xl active:scale-95"
            >
              Comenzar ahora
            </a>
            <a
              href="#learn-more"
              className="w-full sm:w-auto text-white border border-white/30 backdrop-blur-md px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Conocer más <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
