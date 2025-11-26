import React, { useState } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useProjects } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";

const ProjectSubmissionPage: React.FC = () => {
  const { user } = useAuth();
  const { addProject } = useProjects();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    addProject(title, description, user.username);
    alert("Proyecto enviado exitosamente");
    navigate("/mis-proyectos");
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Enviar Proyecto para Evento</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Título del Proyecto</label>
          <input 
            type="text" 
            required
            className="w-full border p-2 rounded"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Descripción</label>
          <textarea 
            required
            className="w-full border p-2 rounded"
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Archivo (PDF/PPT)</label>
          <input 
            type="file" 
            required
            accept=".pdf,.ppt,.pptx"
            onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
            className="w-full border p-2 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
          Enviar Proyecto
        </button>
      </form>
    </div>
  );
};

export default ProjectSubmissionPage;