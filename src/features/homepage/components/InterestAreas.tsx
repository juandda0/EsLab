import React from "react";

const areas = [
  "Salud pública y epidemiología",
  "Economía regional",
  "Seguridad ciudadana",
  "Tecnologías de información",
  "Educación y sociedad",
];

const InterestAreas: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Áreas de Interés
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          {areas.map((area) => (
            <li key={area} className="bg-gray-100 p-6 rounded-lg shadow hover:bg-gray-200 transition">
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InterestAreas;
