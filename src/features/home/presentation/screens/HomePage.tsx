import React from 'react';
import HeroSection from '../../../hero';
import MissionVision from '../../../MissionVision';
import AcademicTeam from '../../../AcademicTeam';
import InterestAreas from '../../../InterestAreas';
import ContactSection from '../../../ContactSection';

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