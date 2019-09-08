import React from 'react';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-center text-center p-10">
      <img src={logo} alt="Logo" width="100" />
      <h1 className="w-full text-5xl font-exo font-hairline tracking-widest my-5">guizo</h1>
      <h2 className="w-full text-xl text-customGreen font-bold font-openSans">Desenvolvedor Web</h2>
    </header>
  );
}

export default Header;
