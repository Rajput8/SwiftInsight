import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Swift Insight</h3>
          <p>Insights into the world of Swift.</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/qa">Q&A</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">External Resources</h3>
          <ul className="footer-links">
            <li><a href="https://swift.org" target="_blank" rel="noopener noreferrer">Swift.org</a></li>
            <li><a href="https://developer.apple.com/swift/" target="_blank" rel="noopener noreferrer">Apple Developer</a></li>
            <li><a href="https://docs.swift.org/swift-book/" target="_blank" rel="noopener noreferrer">Swift Documentation</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Swift Insight. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
