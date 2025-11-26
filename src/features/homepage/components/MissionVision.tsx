import React from "react";
import { Target, Eye } from "lucide-react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center md:text-left mb-2">
          Lo que representamos
        </h2>
        <h3 className="text-xl text-gray-800 font-normal text-center md:text-left">
          Pilares y Proyección del Laboratorio
        </h3>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 pt-10">
        {/* Misión */}
        <div className="p-8 border-1 border-gray-300 rounded-md hover:translate-y-2 transition-all">
          <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4 text-black">
            <Target className="w-7 h-7" />
            Misión
          </h3>
          <p className="text-gray-700">
            Formar profesionales con alto nivel científico capaces de aplicar
            conocimientos en tecnología y estadística para resolver problemas
            sociales, económicos y de seguridad en la región de Córdoba.
          </p>
        </div>

        {/* Visión */}
        <div className="p-8 border-1 border-gray-300 rounded-md hover:translate-y-2 transition-all">
          <h3 className="flex items-center gap-3 text-2xl font-semibold mb-4 text-black">
            <Eye className="w-7 h-7" />
            Visión
          </h3>
          <p className="text-gray-700">
            Ser un laboratorio líder en investigación y análisis de datos,
            reconocido por su contribución al desarrollo regional e
            internacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
