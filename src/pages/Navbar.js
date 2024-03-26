import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isRightSide = false }) { // Optional prop for right-sided positioning

  const [isOpen, setIsOpen] = useState(false); // State for mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuClasses = `nav__menu ${isOpen ? 'show' : ''}`; // Dynamic class for menu visibility

  return (
    <nav className={`navbar navbar-expand-lg navbar-${isRightSide ? 'dark' : 'light'} bg-${isRightSide ? 'dark' : 'light'} fixed-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Your App Name</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuClasses}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
