import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f] max-w-sm leading-tight">
            Nuestra Identidad
          </h2>
          <p className="text-xl text-[#86868b] font-medium max-w-sm">
            Fundamentos y horizontes estratégicos que guían nuestro impacto institucional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#d2d2d7]/50"></div>

          {/* Misión */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-bold text-[#16a34a] uppercase tracking-[0.2em]">
              Propósito / Misión
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-[#1d1d1f] leading-snug tracking-tight">
              Formar profesionales con alto rigor científico capaces de aplicar
              analítica avanzada y análisis geoespacial en la resolución de desafíos regionales.
            </p>
          </div>

          {/* Visión */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-bold text-[#3b82f6] uppercase tracking-[0.2em]">
              Proyección / Visión
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-[#1d1d1f] leading-snug tracking-tight">
              Consolidarnos como un laboratorio referente en ciencia de datos a nivel internacional, reconocido por la excelencia en la generación de impacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
