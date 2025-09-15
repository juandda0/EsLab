import React from 'react';
import Noticias from '../../../noticias/';
import AboutSection from '../../../aboutSection';
import HeroSection from '../../../hero';
import InformateSection from '../../../informate';
import DestacadosSection from '../../../destacados';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <Noticias />
      <InformateSection />
      <DestacadosSection />
      <AboutSection />
    </div>
  );
}

export default HomePage;