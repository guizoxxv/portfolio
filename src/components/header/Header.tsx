import React from 'react';
import guizo from '../../assets/images/guizo.png';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-center text-center p-10">
      <img src={guizo} alt="guizo" width="200" className="rounded-full my-5" />
      <h2 className="w-full text-3xl text-customGreen font-bold font-exo">
        Olá, meu nome é Gustavo<br></br>
        Sou um desenvolvedor web full-stack
      </h2>
    </header>
  );
}

export default Header;
