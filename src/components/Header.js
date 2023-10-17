import React from 'react';
import Logo from '../assets/logo.svg.png';

const Header = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/AlanMunozMartins.pdf';
    link.download = 'AlanMunozMartins.pdf';
    link.click();
  };

  return (
    <header className='py-2'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="https://github.com/alanmmartins">
            <img className='w-20' src={Logo} alt="Logo da imagem" />
          </a>
          <button className='btn btn-sm' onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
