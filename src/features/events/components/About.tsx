import React from "react";
import { useEventContext } from "../context/EventContext";
import { Download } from "lucide-react";

const About: React.FC = () => {
  const { eventData } = useEventContext();
  const { visible, title, description, downloads } = eventData.about;

  if (!visible) return null;

  return (
    <section>
      <div className="flex flex-col max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center mb-10 my-10 border-b border-gray-200 pb-3 items-start">
          Eventos y presentaciones
        </h2>
        <div>
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            {title}
          </h3>
          <div className="inline-block w-[35px] h-[6px] bg-green-600 rounded-3xl mt-4 mb-8"></div>
        </div>

        <div className="mb-1 flex flex-col md:grid md:grid-cols-[3fr_1fr] gap-8">
          <div>
            {description.split('\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-4 text-lg">
                    {paragraph}
                </p>
            ))}
          </div>

          {/* Sección de Descargas Dinámica */}
          {downloads && downloads.length > 0 && (
            <div className="flex flex-col bg-green-50 justify-center items-center p-6 rounded-lg self-start w-full">
                <h4 className="text-lg font-semibold text-center mb-4 text-green-900">
                — Descargas —
                </h4>
                <div className="w-full space-y-3">
                    {downloads.map((item, index) => (
                        <a 
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 flex items-center justify-center gap-2 transition-all rounded-lg shadow w-full text-center"
                        >
                            <Download className="w-5 h-5" /> {item.label}
                        </a>
                    ))}
                </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;