import React from 'react'


const Header = () => {
  return (
    <>
    
    <div className='desktop-navbar bg-amber-400 text-amber-50 flex justify-between p-2' >
      
     <div id='navbar-logo' className='text-3xl' >
     <i className="ri-bluesky-fill">BlueSky</i>
     </div>
     <div id='navbar-items ' className='p-2'>
      <ul className='listItems md:flex hidden gap-2 '>
        <li >Home</li>
        <li >About</li>
        <li >Contact Us</li>
        <li >Services</li>
      </ul>
     </div>
     <div id='navbar-menu' className='p-2 md:invisible visible'>
     <i className="ri-more-2-fill"></i>
     </div>
    </div>
    </>
  )
}

export default Header
