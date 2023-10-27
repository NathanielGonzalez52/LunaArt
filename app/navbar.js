import React from 'react';
import Link from "next/link";

export default function navbar() {
  return (
<>
<nav className='navbar sticky-top'>
  <div className='navbar-container'>
  <Link to='/'><img className="logo" src="../../images/senor_taco.png"
  alt="logo" onClick={closeMobileMenu}></img></Link>
    {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
      TRVL
      <i class='fab fa-typo3' />
    </Link> */}
    <div className='menu-icon' onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/menuhome'
          className='nav-links'
          onClick={closeMobileMenu}
        >
          Menu
        </Link>
      </li>
      <li className='nav-item'>
      

        <Link
          activeClass="active"
          to="hook"
          spy={true}
          smooth={true}
          duration={30}
          className='nav-links'
          onClick={closeMobileMenu}
          offset={-120}
        >
          About Us
        </Link>
      </li>
    </ul>
  </div>
</nav>
</>
  )
}







