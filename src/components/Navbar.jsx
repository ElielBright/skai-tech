// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="logo"><h1>SkaiTech</h1></div>
      
      {/* Hamburger Menu for mobile */}
      <div
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        id="mobile-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Your links here */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
      <li><a href="#home"><i className="fas fa-home"></i> Home</a></li> {/* Home Icon */}
        <li><a href="#about"><i className="fas fa-users"></i> About</a></li> {/* About Icon */}
        <li><a href="#courses"><i className="fas fa-graduation-cap"></i> Courses</a></li> {/* Courses Icon */}
        <li><a href="#contact"><i className="fas fa-envelope"></i> Contact Us</a></li> {/* Contact Icon */}
      </ul>
    </nav>
  );
}

export default Navbar;
