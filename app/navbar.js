import React, {useState} from 'react';
import Link from "next/link";
import "./navbar.css";

export default function navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav>
            <a href="home"></a>
            <div>
            <ul id="navbar" className={click ? 'navbar active' : 'navbar'}>
                <li><a className="active" href="index.html">
                Home
                </a></li>
                <li><a href="index.html">
                Shop
                </a></li>
                <li><a href="index.html">
                Items
                </a></li>
                <li><a href="index.html">
                About
                </a></li>
            </ul>
            </div>

            <div id="mobile" onClick={handleClick}>
               <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'}></i>

            </div>
        </nav>
    </>
  )
}
