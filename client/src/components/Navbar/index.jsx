import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        LOGO
      </Link>
      <div className="navbar-right">
        <Link to="/about" className="navbar-item">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
