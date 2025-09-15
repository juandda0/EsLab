import React from 'react';

import heroImage from './assets/thgaleria_1400X920_284.webp';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-[50vh] bg-gray-300"> {/* Contenedor principal */}

      <img
        src={heroImage}
        alt="Banner principal del Observatorio del Delito de Córdoba"
        className="w-full h-full object-cover"
      />

    </section>
  );
};

export default HeroSection;