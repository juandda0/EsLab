import React from 'react';
import Navbar from './features/navBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './features/home/presentation/screens/HomePage';
import VisualizadorDelitos from './features/visualizadorDelitos';
import Footer from './features/footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* El Navbar estará presente en todas las páginas */}
      <Navbar />
      
      
      <main className="pt-20">
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<HomePage />} />
        
        {/* Ruta para el nuevo visualizador */}
        <Route path="/visualizador-delitos" element={<VisualizadorDelitos />} />
        
        {/* Puedes añadir más rutas aquí */}
      </Routes>
      </main>
      <Footer />
      
      {/* Aquí podrías poner un Footer si también es global */}
    </BrowserRouter>
  );
};

export default App;