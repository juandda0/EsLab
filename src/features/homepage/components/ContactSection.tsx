import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#16a34a] to-[#15803d]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="max-w-3xl text-center mb-20 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            Mantengamos el contacto
          </h2>
          <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta de colaboración? Estamos listos para escucharte.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/80 ml-1">Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Ej. Ricardo Guzmán" 
                  className="w-full p-4 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[#1d1d1f] placeholder:text-[#86868b]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/80 ml-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="ejemplo@correo.com" 
                  className="w-full p-4 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[#1d1d1f] placeholder:text-[#86868b]" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/80 ml-1">Mensaje o Propuesta</label>
              <textarea 
                placeholder="Cuéntanos sobre tu proyecto o duda..." 
                rows={5} 
                className="w-full p-4 rounded-xl border border-transparent bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-[#1d1d1f] placeholder:text-[#86868b] resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <button 
                type="submit" 
                className="w-full md:w-auto bg-white text-[#16a34a] px-16 py-4 rounded-lg font-bold hover:bg-white/90 transition-all shadow-2xl active:scale-[0.98]"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
