import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary px-10 text-text py-3 flex flex-row gap-2 sticky top-0 z-50">
      <p className="font-mulish text-start py-2">ghaidazalfahhh@gmail.com</p>
      <a href='mailto:ghaidazalfahhh@gmail.com' className='font-mulish bg-third py-2 px-5 rounded-full'>Send mail</a>
      <div className='py-2 text-end flex-1'>
        <a href="https://www.linkedin.com/in/ghaida-zalfa-husniyah-027440270/" className='font-mulish'>Linkedin</a> / 
        <a href="https://www.instagram.com/ghaidazalfh/profilecard/?igsh=MnJicDBnaHQ4NWxo" className='font-mulish'> Instagram</a>
      </div>
    </header>
  );
};

export default Header;
