import React from "react";
import { useProjects } from "../context/ProjectContext";
import { useAuth } from "../../auth/hooks/useAuth";

const SupervisorDashboard: React.FC = () => {
  const { projects, updateProjectStatus } = useProjects();
  const { user } = useAuth();

  const myProjects = projects.filter(p => p.assignedTo === user?.username);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Panel de Supervisor: {user?.username}</h2>
      {myProjects.length === 0 ? (
        <p>No tienes proyectos asignados.</p>
      ) : (
        <div className="grid gap-6">
          {myProjects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">Por: {project.author}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a href="#" className="text-blue-600 hover:underline text-sm">Descargar Archivo</a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-gray-500 mb-1">Estado: {project.status}</span>
                  <button 
                    onClick={() => updateProjectStatus(project.id, "Aprobado")}
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm"
                  >
                    Aprobar
                  </button>
                  <button 
                    onClick={() => updateProjectStatus(project.id, "Rechazado")}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupervisorDashboard;