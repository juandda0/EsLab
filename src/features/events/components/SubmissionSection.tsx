import React, { useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useProjects } from "../../projects/context/ProjectContext"; // Asegúrate que esta ruta sea correcta según tu estructura
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
        addProject(title, description, user.username);
        setIsSubmitting(false);
        alert("Propuesta enviada correctamente. El comité revisará su solicitud.");
        // Limpiar formulario
        setTitle("");
        setDescription("");
        setFile(null);
        navigate("/mis-proyectos"); // Redirigir para que vea su estado
    }, 1000);
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Envío de Propuestas
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Invitamos a la comunidad académica a presentar sus trabajos de investigación. 
            Por favor complete el formulario a continuación para postular su ponencia.
          </p>
          <div className="inline-block w-16 h-1 bg-green-600 rounded-full mt-6"></div>
        </div>

        {/* Lógica Condicional de UI */}
        {user ? (
          // --- ESTADO: LOGUEADO (FORMULARIO) ---
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-green-700 px-8 py-4">
              <h3 className="text-white font-medium text-lg flex items-center gap-2">
                <Send className="w-5 h-5" /> Formulario de Registro de Ponencia
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-1 gap-6">
                
                {/* Título */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Título del Proyecto / Ponencia
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Análisis Estadístico de..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none bg-gray-50 focus:bg-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Descripción */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Resumen Ejecutivo (Abstract)
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describa brevemente los objetivos y metodología..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                {/* Carga de Archivos */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Documento Adjunto (PDF/PPT)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 justify-center">
                        <label className="relative cursor-pointer bg-transparent rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none">
                          <span>Subir un archivo</span>
                          <input 
                            type="file" 
                            className="sr-only" 
                            accept=".pdf,.ppt,.pptx"
                            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                          />
                        </label>
                        <p className="pl-1">o arrastrar y soltar</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, PPT hasta 10MB</p>
                      {file && (
                        <p className="text-sm text-green-700 font-semibold mt-2">
                            Archivo seleccionado: {file.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Propuesta"}
                </button>
              </div>
            </form>
          </div>
        ) : (
          // --- ESTADO: NO LOGUEADO (CTA) ---
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-10 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Acceso Restringido
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Para garantizar la integridad del proceso de selección académica, 
              es necesario iniciar sesión en la plataforma para enviar propuestas de proyectos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => navigate("/login")}
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
              >
                Iniciar Sesión
              </button>
              <button 
                className="px-8 py-3 bg-white text-gray-700 border border-gray-300 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
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