import React from "react";
import About from "./components/About";
import ImportantDates from "./components/ImportantDates";
import ConferenceAgenda from "./components/ConferenceAgenda";
import OralPresentation from "./components/OralPresentation";
import SubmissionSection from "./components/SubmissionSection";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/hooks/useAuth";
import { Settings } from "lucide-react";

const EventsPage: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className="bg-white relative">
            
            {/* Botón flotante para editar evento (Solo Admin) */}
            {user?.role === "admin" && (
                <div className="fixed bottom-8 right-8 z-40">
                    <Link 
                        to="/admin/editar-evento" 
                        className="bg-gray-900 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-gray-800 hover:scale-105 transition-all flex items-center gap-3 font-bold border-2 border-white"
                    >
                        <Settings className="w-6 h-6 animate-spin-slow" />
                        Editar Evento
                    </Link>
                </div>
            )}

            {/* Cabecera visual */}
            <div className="bg-[#f5f5f7] py-24 border-b border-[#d2d2d7]/50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f] leading-tight max-w-2xl">
                            Agenda Académica <br /> y Eventos
                        </h1>
                        <p className="text-[#86868b] text-xl font-medium max-w-sm md:pt-4">
                            Encuentros, conferencias y presentación de proyectos estratégicos de la Universidad de Córdoba.
                        </p>
                    </div>
                </div>
            </div>

            {/* Secciones Informativas */}
            <div className="space-y-16 py-12">
                <About />
                <ImportantDates />
                <ConferenceAgenda />
                <OralPresentation />
            </div>

            {/* Sección de Acción (Formulario) al final */}
            <SubmissionSection />
        </div>
    );
}

export default EventsPage;