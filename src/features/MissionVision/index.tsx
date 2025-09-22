import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        <div className="bg-green-50 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-4 text-green-700">Misión</h3>
          <p className="text-gray-700">
            Formar profesionales con alto nivel científico capaces de aplicar
            conocimientos en tecnología y estadística para resolver problemas
            sociales, económicos y de seguridad en la región de Córdoba.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Visión</h3>
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
