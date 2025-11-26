import React from "react";
import { useProjects } from "../context/ProjectContext";
import { useAuth } from "../../auth/hooks/useAuth";
import { Link } from "react-router-dom";

const UserDashboard: React.FC = () => {
  const { projects } = useProjects();
  const { user } = useAuth();

  const mySubmissions = projects.filter(p => p.author === user?.username);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Mis Proyectos Enviados</h2>
        <Link to="/enviar-proyecto" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Nuevo Proyecto
        </Link>
      </div>

      <div className="space-y-4">
        {mySubmissions.map(project => (
          <div key={project.id} className="bg-white p-4 rounded-lg shadow border border-gray-200 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-lg">{project.title}</h4>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
               project.status === 'Aprobado' ? 'bg-green-100 text-green-800' :
               project.status === 'Rechazado' ? 'bg-red-100 text-red-800' :
               'bg-yellow-100 text-yellow-800'
            }`}>
              {project.status}
            </span>
          </div>
        ))}
        {mySubmissions.length === 0 && <p className="text-gray-500">No has enviado proyectos aún.</p>}
      </div>
    </div>
  );
};

export default UserDashboard;