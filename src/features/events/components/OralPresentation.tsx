import { useEventContext } from "../context/EventContext";

export default function OralPresentation() {
  const { eventData } = useEventContext();
  const { visible, content, gallery } = eventData.oral;

  if (!visible) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f]">
            Presentación <br /> Oral
          </h2>
          <div className="h-[1px] w-20 bg-[#16a34a] mt-6 md:mt-10"></div>
        </div>

        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16 items-start">
          {/* Texto dinámico */}
          <div className="space-y-10">
            <div className="text-[#424245] whitespace-pre-line text-xl font-medium leading-relaxed">
              {content}
            </div>
            
            <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#d2d2d7]/30">
               <h3 className="text-sm font-black text-[#1d1d1f] mb-6 uppercase tracking-widest border-b border-[#d2d2d7]/50 pb-2">Lineamientos de Ponencia</h3>
               <ul className="space-y-4">
                {[
                    "El envío de trabajos completos es obligatorio para la ponencia.",
                    "Se aceptan abstracts para revisiones preliminares.",
                    "Tiempo de exposición: 15 minutos + 5 de preguntas."
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                        <span className="text-[#424245] text-lg font-medium">{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Galería Dinámica */}
          <div className="grid grid-cols-2 gap-4">
            {gallery && gallery.length > 0 ? (
                gallery.map((imgUrl, i) => (
                    <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-sm bg-[#f5f5f7] group border border-[#d2d2d7]/30">
                        {imgUrl ? (
                             <img 
                                src={imgUrl} 
                                alt={`Presentation ${i+1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#86868b] text-[10px] font-bold uppercase tracking-widest">Sin registro</div>
                        )}
                    </div>
                ))
            ) : (
                [1,2,3,4].map(i => (
                    <div key={i} className="bg-[#f5f5f7] aspect-square rounded-3xl animate-pulse border border-[#d2d2d7]/30"></div>
                ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}