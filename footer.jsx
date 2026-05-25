import React from 'react';

const Footer = ({ companyName }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} {companyName}. All rights reserved.</p>
        <div className="social-icons">
          <a href="#github">GitHub</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;