import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ clearSongData }) {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={clearSongData}>
        ENSEMBLE
      </Link>
      <div className="navbar-right">
        <Link to="/about" className="nav-links" onClick={clearSongData}>
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
