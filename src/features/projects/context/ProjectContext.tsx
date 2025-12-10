import React, { createContext, useState, useContext } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  status: "Pendiente" | "En Revisión" | "Aprobado" | "Rechazado";
  assignedTo: string | null; 
  fileUrl: string;
}

interface ProjectContextType {
  projects: Project[];
  addProject: (
    title: string,
    description: string,
    author: string,
    file: File
  ) => void;
  assignProject: (projectId: string, supervisorName: string) => void;
  updateProjectStatus: (projectId: string, status: Project["status"]) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Análisis de Datos Climáticos",
      description: "Proyecto sobre variaciones en Córdoba",
      author: "juan",
      status: "Pendiente",
      assignedTo: null,
      fileUrl: "mock.pdf"
    }
  ]);

  const addProject = (title: string, description: string, author: string, file: File) => {
  const newProject: Project = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    description,
    author,
    status: "Pendiente",
    assignedTo: null,
    fileUrl: URL.createObjectURL(file) 
  };

  setProjects([...projects, newProject]);
};

  const assignProject = (projectId: string, supervisorName: string) => {
    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, assignedTo: supervisorName, status: "En Revisión" } : p
    ));
  };

  const updateProjectStatus = (projectId: string, status: Project["status"]) => {
    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, status } : p
    ));
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, assignProject, updateProjectStatus }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProjects must be used within ProjectProvider");
  return context;
};