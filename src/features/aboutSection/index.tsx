import React from 'react';
import InfoCard from './components/InfoCard';


// Textos para la misión y visión
const misionTexto = "Somos una entidad que genera y difunde conocimiento sobre el delito en Córdoba, para orientar la toma de decisiones en políticas públicas de seguridad y convivencia ciudadana.";
const visionTexto = "Seremos en 2025 el principal referente técnico y académico en el análisis del delito en el departamento de Córdoba, reconocidos por la calidad y pertinencia de nuestra información.";

const AboutSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-24">
          Quiénes somos
        </h2>

        <div className="flex flex-row items-center gap-10">
          <InfoCard 
            title="Misión" 
            description={misionTexto}
          />
          <InfoCard 
            title="Visión" 
            description={visionTexto}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;