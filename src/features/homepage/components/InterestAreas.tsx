import React from "react";

const areas = [
  "Estadística Espacial y Geoestadística",
  "Modelación Predictiva Geoespacial (GeoAI)",
  "Análisis Urbano y Territorial",
  "Ambiente, Sostenibilidad y Cambio Climático",
  "Big Data Geoespacial y Sistemas de Información",
];

const InterestAreas: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f] max-w-md leading-tight">
            Nuestras Líneas de Investigación
          </h2>
          <p className="text-xl text-[#86868b] font-medium max-w-sm">
            Exploramos dimensiones críticas de la sociedad a través de la ciencia de datos aplicada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1 border-t border-[#d2d2d7]/50">
          {areas.map((area, index) => (
            <div 
              key={area} 
              className="group flex items-center justify-between py-10 border-b border-[#d2d2d7]/50 hover:bg-[#1d1d1f]/[0.02] transition-all px-4 cursor-default"
            >
              <div className="flex items-baseline gap-10">
                <span className="text-sm font-bold text-[#16a34a] font-mono tracking-widest">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-[#1d1d1f] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {area}
                </span>
              </div>
              
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#16a34a] text-2xl font-light">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestAreas;
