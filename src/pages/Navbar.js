import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isRightSide = false }) { 

  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuClasses = `nav__menu ${isOpen ? 'show' : ''}`;

  return (
    <nav className={`navbar navbar-expand-lg navbar-${isRightSide ? 'dark' : 'light'} bg-${isRightSide ? 'dark' : 'light'} fixed-top`}>
      <div className="container-fluid">
      <img src="https://logos-download.com/wp-content/uploads/2016/10/Deloitte_logo_black.png" alt="React Image" className="photo" />
        <div className={`collapse navbar-collapse ${menuClasses}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-button">
          <span>
            <Link className="nav-link" to="/home">Home</Link>
            </span>
            </li>

          <li className="nav-button">
          <span>
            <Link className="nav-link" to="/about">About</Link>
            </span>
            </li>
            <li className="nav-button">
            <span>
            <Link className="nav-link" to="/expense">Expenses</Link>
            </span>
            </li>
            <li className="nav-button">
            <span>
            <Link className="nav-link" to="/logout">Logout</Link>
            </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
