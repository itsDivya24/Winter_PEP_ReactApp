import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link
          className={`navbar-brand me-3 ${activeLink === 'home' ? 'active' : ''}`}
          to="/"
          onClick={() => handleClick('home')}
        >
          <i className="bi bi-house-door-fill"></i> Home
        </Link>
        <Link
          className={`navbar-brand ${activeLink === 'form' ? 'active' : ''}`}
          to="/form"
          onClick={() => handleClick('form')}
        >
          <i className="bi bi-file-earmark-text-fill"></i> Form
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Additional navigation items can be added here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
