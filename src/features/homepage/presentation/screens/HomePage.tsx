import React from 'react';
import HeroSection from '../../components/hero';
import MissionVision from '../../components/MissionVision';
import AcademicTeam from '../../components/AcademicTeam';
import InterestAreas from '../../components/InterestAreas';
import ContactSection from '../../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <MissionVision />
      <AcademicTeam />
      <InterestAreas />
      <ContactSection />
    </div>
  );
}

export default HomePage;