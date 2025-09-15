import React from 'react';
import MainNav from './components/MainNav';

const Navbar: React.FC = () => {
  return (
    <header className="w-full font-sans fixed top-0 left-0 z-50">
      <MainNav />
    </header>
  );
};

export default Navbar;