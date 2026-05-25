import React, { useState } from 'react';

const Header = ({ logoText, links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">{logoText}</div>
        
        {/* Desktop Menu */}
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {links.map((link, index) => (
            <a key={index} href={link.url} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;