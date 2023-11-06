import React, {useState} from 'react';
import Link from "next/link";
import "./navbar.css";

export default function navbar() {

    
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
<>
<nav className='navbar sticky-top'>
  <div className='navbar-container'>
  {/* <Link href=""><img className="logo" src="../luna_images/Lunarum.png"
  alt="hooo" onClick={closeMobileMenu}></img></Link> */}
    {/* <Link href="" to='/' className='navbar-logo' onClick={closeMobileMenu}>
      TRVL
      <i class='fab fa-typo3' />
    </Link> */}
    <div className='menu-icon' onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
        <Link href="">
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link href="">
          Shop
        </Link>
      </li>
      <li className='nav-item'>
        <Link href="">
          About
        </Link>
      </li>

    </ul>
  </div>
</nav>
</>
  )
}







