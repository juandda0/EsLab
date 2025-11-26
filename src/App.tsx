import React from "react";
import Navbar from "./shared/layout/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/homepage/presentation/screens/HomePage";
import VisualizadorDelitos from "./features/visualizadorDelitos";
import Footer from "./shared/layout/footer/Footer";
import EventosPage from "./features/events/EventsPage";
import { useAuth } from "./features/auth/hooks/useAuth";
import LoginPage from "./features/auth/pages/LoginPage";
import { AuthProvider } from "./features/auth/context/AuthContext";
import { ProjectProvider } from "./features/projects/context/ProjectContext";
import { EventProvider } from "./features/events/context/EventContext"; // <--- IMPORTANTE

import ProjectSubmissionPage from "./features/projects/pages/ProjectSubmissionPage";
import AdminDashboard from "./features/projects/pages/AdminDashboard";
import SupervisorDashboard from "./features/projects/pages/SupervisorDashboard";
import UserDashboard from "./features/projects/pages/UserDashboard";
import EventEditorPage from "./features/events/pages/EventEditorPage"; // <--- IMPORTANTE

const ProtectedRoute: React.FC<{ children: React.ReactNode; roles?: string[] }> = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user) return <LoginPage />;
  if (roles && !roles.includes(user.role)) return <div className="p-10 text-center">No tienes permiso para ver esta página</div>;
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProjectProvider>
        <EventProvider> {/* <--- WRAPPER NUEVO */}
            <BrowserRouter>
            <Navbar />

            <main className="min-h-screen bg-gray-50">
                <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/visualizador-delitos" element={<VisualizadorDelitos />} />
                
                <Route path="/eventos" element={<EventosPage />} />

                {/* --- NUEVA RUTA DE EDICIÓN --- */}
                <Route path="/admin/editar-evento" element={
                    <ProtectedRoute roles={['admin']}>
                    <EventEditorPage />
                    </ProtectedRoute>
                } />

                {/* Rutas previas... */}
                <Route path="/enviar-proyecto" element={
                    <ProtectedRoute roles={['user', 'admin', 'supervisor']}>
                    <ProjectSubmissionPage />
                    </ProtectedRoute>
                } />

                <Route path="/mis-proyectos" element={
                    <ProtectedRoute roles={['user', 'admin', 'supervisor']}>
                    <UserDashboard />
                    </ProtectedRoute>
                } />

                <Route path="/admin/proyectos" element={
                    <ProtectedRoute roles={['admin']}>
                    <AdminDashboard />
                    </ProtectedRoute>
                } />

                <Route path="/supervisor/proyectos" element={
                    <ProtectedRoute roles={['supervisor', 'admin']}>
                    <SupervisorDashboard />
                    </ProtectedRoute>
                } />

                </Routes>
            </main>

            <Footer />
            </BrowserRouter>
        </EventProvider>
      </ProjectProvider>
    </AuthProvider>
  );
};

export default App;