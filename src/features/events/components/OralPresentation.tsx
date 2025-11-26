import React from "react";
import { useEventContext } from "../context/EventContext";

export default function OralPresentation() {
  const { eventData } = useEventContext();
  const { visible, content, gallery } = eventData.oral;

  if (!visible) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Oral Presentation
        </h2>
        <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-4 mb-8"></div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Texto dinámico */}
          <div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6 text-gray-700 whitespace-pre-line text-lg leading-relaxed">
              {content}
            </div>
            
            <div className="pl-2">
               <h3 className="font-bold text-gray-900 mb-3">Lineamientos Rápidos</h3>
               <ul className="list-disc ml-5 space-y-2 text-gray-600">
                <li>El envío de trabajos completos es obligatorio para la ponencia.</li>
                <li>Se aceptan abstracts para revisiones preliminares.</li>
                <li>Tiempo de exposición: 15 minutos + 5 de preguntas.</li>
              </ul>
            </div>
          </div>

          {/* Galería Dinámica */}
          <div className="grid grid-cols-2 gap-4">
            {gallery && gallery.length > 0 ? (
                gallery.map((imgUrl, i) => (
                    <div key={i} className="h-40 rounded-lg overflow-hidden shadow-sm bg-gray-100 group">
                        {imgUrl ? (
                             <img 
                                src={imgUrl} 
                                alt={`Presentation ${i+1}`} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                             />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Sin Imagen</div>
                        )}
                    </div>
                ))
            ) : (
                // Fallback si no hay imágenes
                [1,2,3,4].map(i => (
                    <div key={i} className="bg-gray-200 h-40 rounded-lg animate-pulse"></div>
                ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}