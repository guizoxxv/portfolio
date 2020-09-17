import React from 'react';
import guizo from '../../assets/images/guizo.png';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-center text-center p-10">
      <img src={guizo} alt="guizo" width="200" className="rounded-full my-5" />
      <h2 className="w-full text-3xl text-customGreen font-bold font-exo">
        Hi, my name is Gustavo,<br></br>
        I'm a full-stack web developer
      </h2>
    </header>
  );
}

export default Header;
