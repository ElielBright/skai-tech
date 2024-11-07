// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 SkaiTech. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Service</a> |
          <a href="#">Contact Us</a>
        </p>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
