import React from 'react';
// Importamos íconos para los botones
import { FaShareAlt, FaSearch } from 'react-icons/fa'; 

// --- ¡IMPORTANTE! ---
// Debes reemplazar esta URL por la URL real de tu informe
// la obtienes en Power BI: "Archivo" > "Insertar informe" > "Publicar en la web (público)"
const POWER_BI_EMBED_URL = "https://app.powerbi.com/view?r=eyJrIjoi...tu-url-publica-aqui";

const VisualizadorDelitos: React.FC = () => {
  return (
    // Usamos un fondo gris claro similar al de "Quiénes somos"
    <section className="bg-gray-100 py-12 min-h-screen">
      <div className="container mx-auto px-4">

        {/* --- Cabecera de la Sección --- */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            {/* Título de la página */}
            <h2 className="text-4xl font-bold text-black mb-4 md:mb-0">
              Visualizador delitos de impacto en el Departamento de Córdoba
            </h2>
            
            {/* Botones de Compartir y Buscar */}
            <div className="flex space-x-2">
              <button className="flex items-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                <FaShareAlt className="mr-2" />
                Compartir
              </button>
              <button className="flex items-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
                <FaSearch className="mr-2" />
                Buscar
              </button>
            </div>
          </div>

          {/* Párrafo de Descripción */}
          <p className="text-gray-600 text-base max-w-5xl">
            En esta sección se visualizan (usando Power BI) algunos análisis exploratorios de los delitos de impacto en el departamento de Córdoba. En forma interactiva se exhiben variables relevantes para diferentes períodos de tiempo (años). En cada período se ilustran los resultados. Los años que se describen, 2016 a 2022, corresponden al período de tiempo, 1 de enero a 31 de diciembre de cada año, exceptuando, el año 2022, cuyo corte está hasta el 30 de noviembre de 2022. En todos los casos las bases de datos que soportan estos análisis tienen como fuente primaria el sistema de información Estadístico, Delincuencial, Contravencional y Operativo (SIEDCO).
          </p>
        </div>

        {/* --- Contenedor del Power BI Embed --- */}
        {/* Usamos 'aspect-video' (proporción 16:9) para el contenedor.
          Le damos una sombra y bordes redondeados.
        */}
        <div className="aspect-video w-full shadow-lg rounded-lg overflow-hidden">
          <iframe
            title="Visualizador delitos de impacto en el Departamento de Córdoba"
            className="w-full h-full border-0"
            src={POWER_BI_EMBED_URL}
            allowFullScreen={true}
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default VisualizadorDelitos;