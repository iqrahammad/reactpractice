import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className='desktop-navbar bg-amber-400 text-amber-50 flex justify-between p-2'>
        <div id='navbar-logo' className='text-3xl'>
          <i className="ri-bluesky-fill">BlueSky</i>
        </div>

        <div id='navbar-items' className='p-2'>
          <ul className='listItems md:flex hidden gap-2'>
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </div>

        <div
          id='navbar-menu'
          className='p-2 md:invisible visible'
          onClick={handleToggleMenu}
        >
          <i className="ri-more-2-fill"></i>
        </div>
      </div>

    
      <div className={`${toggleMenu ? 'block' : 'hidden'} text-center leading-10 bg-amber-400 text-amber-50 md:hidden`}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
