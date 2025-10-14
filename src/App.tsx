import React from 'react';
import Navbar from './shared/layout/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './features/homepage/presentation/screens/HomePage';
import VisualizadorDelitos from './features/visualizadorDelitos';
import Footer from './shared/layout/footer/Footer';
import EventosPage from './features/events/EventsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      
      <main>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ruta para el nuevo visualizador */}
        <Route path="/visualizador-delitos" element={<VisualizadorDelitos />} />
        
        <Route path="/eventos" element={<EventosPage />} />
      </Routes>
      </main>
      <Footer />
      
      {/* Aquí podrías poner un Footer si también es global */}
    </BrowserRouter>
  );
};

export default App;