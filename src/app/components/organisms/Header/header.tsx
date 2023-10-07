// components/organisms/Header.tsx
import React from 'react';
import Navbar from '../../molecules/NavBar/nav';

const Header: React.FC = () => {
  return (
    <header>
      {/* Puedes agregar otros elementos de encabezado si es necesario */}
      <Navbar/>
    </header>
  );
};

export default Header;
