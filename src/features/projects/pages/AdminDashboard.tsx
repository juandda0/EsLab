import React, { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { useAuth } from "../../auth/hooks/useAuth";

const AdminDashboard: React.FC = () => {
  const { projects, assignProject } = useProjects();
  const { getAllSupervisors } = useAuth();
  const supervisors = getAllSupervisors();

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Panel de Administración de Proyectos</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border-b">Proyecto</th>
              <th className="p-4 border-b">Autor</th>
              <th className="p-4 border-b">Estado</th>
              <th className="p-4 border-b">Asignado a</th>
              <th className="p-4 border-b">Acción</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="p-4 border-b font-medium">{project.title}</td>
                <td className="p-4 border-b">{project.author}</td>
                <td className="p-4 border-b">
                  <span className={`px-2 py-1 rounded text-sm ${
                    project.status === 'Aprobado' ? 'bg-green-100 text-green-800' :
                    project.status === 'Rechazado' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4 border-b">{project.assignedTo || "Sin asignar"}</td>
                <td className="p-4 border-b">
                  <select 
                    className="border p-1 rounded"
                    value={project.assignedTo || ""}
                    onChange={(e) => assignProject(project.id, e.target.value)}
                  >
                    <option value="" disabled>Delegar a...</option>
                    {supervisors.map(s => (
                      <option key={s.username} value={s.username}>{s.username}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;