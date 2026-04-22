import React, { useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useProjects } from "../../projects/context/ProjectContext";
import { useNavigate } from "react-router-dom";
import { Lock, Send, UploadCloud } from "lucide-react";

const SubmissionSection: React.FC = () => {
  const { user } = useAuth();
  const { addProject } = useProjects();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSubmitting(true);

    // Simulamos un pequeño delay de red
    setTimeout(() => {
      if (!file) {
        alert("Debes adjuntar un archivo PDF o PPT");
        setIsSubmitting(false);
        return;
      }

      addProject(title, description, user.username, file);
      setIsSubmitting(false);
      alert(
        "Propuesta enviada correctamente. El comité revisará su solicitud."
      );
      // Limpiar formulario
      setTitle("");
      setDescription("");
      setFile(null);
      navigate("/mis-proyectos"); // Redirigir para que vea su estado
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#16a34a] to-[#15803d] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            Envío de Propuestas
          </h2>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Invitamos a la comunidad académica a presentar sus trabajos de
            investigación para postular su ponencia en el próximo encuentro.
          </p>
        </div>

        {user ? (
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
            <form onSubmit={handleSubmit} className="p-10 md:p-14 space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-3 ml-1">
                    Título de la Ponencia
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Análisis Geoespacial de la Productividad..."
                    className="w-full px-6 py-4 rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] text-[#1d1d1f] font-bold text-lg outline-none focus:ring-2 focus:ring-[#16a34a]/20 focus:border-[#16a34a] transition-all"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-3 ml-1">
                    Resumen Ejecutivo (Abstract)
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describa brevemente los objetivos y metodología..."
                    className="w-full px-6 py-4 rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] text-[#1d1d1f] font-medium text-lg outline-none focus:ring-2 focus:ring-[#16a34a]/20 focus:border-[#16a34a] transition-all resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#86868b] uppercase tracking-[0.2em] mb-3 ml-1">
                    Documento Adjunto (PDF/PPT)
                  </label>
                  <div className="group relative flex flex-col items-center justify-center p-12 border-2 border-dashed border-[#d2d2d7] rounded-3xl bg-[#f5f5f7] hover:bg-white hover:border-[#16a34a] transition-all cursor-pointer">
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      accept=".pdf,.ppt,.pptx"
                      onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                    />
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mx-auto mb-4">
                        <UploadCloud className="w-8 h-8 text-[#16a34a]" />
                      </div>
                      <div className="text-lg font-bold text-[#1d1d1f]">
                        {file ? file.name : "Seleccionar Archivo"}
                      </div>
                      <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mt-2 px-1">PDF, PPT hasta 10MB</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 px-6 rounded-2xl text-xl font-black text-white bg-[#1d1d1f] hover:bg-black transition-all shadow-xl active:scale-95 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Enviando Propuesta..." : "Enviar Propuesta"}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-12 md:p-20 text-center max-w-2xl mx-auto border border-white/20">
            <div className="w-20 h-20 bg-[#f5f5f7] rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
              <Lock className="w-10 h-10 text-[#424245]" />
            </div>
            <h3 className="text-3xl font-black text-[#1d1d1f] mb-6 tracking-tighter">
                Sube tu proyecto
            </h3>
            <p className="text-[#86868b] text-xl font-medium mb-10 leading-relaxed">
              Es necesario iniciar sesión en la plataforma para garantizar la integridad académica.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate("/login")}
                className="px-10 py-5 bg-[#16a34a] text-white font-black rounded-2xl shadow-xl hover:bg-[#15803d] hover:-translate-y-1 transition-all active:scale-95 text-lg"
              >
                Iniciar Sesión
              </button>
              <button className="px-10 py-5 bg-white text-[#1d1d1f] border border-[#d2d2d7] font-black rounded-2xl hover:bg-gray-50 transition-all text-lg">
                Más Información
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubmissionSection;
