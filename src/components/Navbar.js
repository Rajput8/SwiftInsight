import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            <svg className="swift-logo" viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="#FF5722"
                d="M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.505-.28.785-.112-.056-.224-.112-.336-.168-.392-.225-.785-.449-1.122-.673-1.851-1.122-3.477-2.636-4.767-4.318-1.234 1.346-2.356 3.024-3.14 4.879-1.011 2.301-1.064 5.215-.224 7.684-1.851-.392-3.813-1.122-5.551-2.188-3.701-2.301-6.57-6.119-7.347-10.43 1.122 4.374 3.926 8.523 7.627 11.154 2.972 2.077 6.055 2.972 9.195 3.197a9.713 9.713 0 0 1-.168.392c-.56.112-.112.224-.168.336-1.234 2.188-3.365 4.094-5.887 5.103 3.813-.392 7.515-2.301 9.814-5.159.392-.504.729-1.01 1.066-1.514.336-.393.617-.841.899-1.346z"
              />
            </svg>
            <span>SwiftInsight</span>
          </div>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}>
            {isMenuOpen ? '✕' : '☰'}
          </i>
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/qa" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              Q&A
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link contact-btn'}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
