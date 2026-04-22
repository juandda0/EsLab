import React from "react";
import { useEventContext } from "../context/EventContext";
import { Download } from "lucide-react";

const About: React.FC = () => {
  const { eventData } = useEventContext();
  const { visible, title, description, downloads } = eventData.about;

  if (!visible) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f] max-w-sm leading-tight">
                {title}
            </h2>
            <div className="h-[1px] w-20 bg-[#16a34a] mt-6 md:mt-10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {description.split('\n').map((paragraph, idx) => (
                <p key={idx} className="text-[#424245] leading-relaxed mb-6 text-xl font-medium">
                    {paragraph}
                </p>
            ))}
          </div>

          <div className="lg:col-span-4">
            {downloads && downloads.length > 0 && (
              <div className="bg-[#f5f5f7] p-8 rounded-3xl border border-[#d2d2d7]/30">
                  <h4 className="text-[11px] font-bold text-[#86868b] uppercase tracking-widest mb-6 border-b border-[#d2d2d7]/50 pb-2">
                    Recursos del Evento
                  </h4>
                  <div className="space-y-4">
                      {downloads.map((item, index) => (
                          <a 
                              key={index}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-[#16a34a] transition-all border border-[#d2d2d7]/50"
                          >
                              <div className="flex items-center gap-4">
                                <div className="p-2 bg-[#f5f5f7] rounded-lg group-hover:bg-white/20 transition-colors">
                                    <Download className="w-5 h-5 text-[#16a34a] group-hover:text-white" />
                                </div>
                                <span className="font-bold text-sm text-[#1d1d1f] group-hover:text-white transition-colors">{item.label}</span>
                              </div>
                              <span className="text-[10px] uppercase font-bold text-[#86868b] group-hover:text-white/80 opacity-0 group-hover:opacity-100 transition-all">Doc</span>
                          </a>
                      ))}
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;