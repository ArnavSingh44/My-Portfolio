import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Arnav Singh. All rights reserved.
      </div>
      <div className="footer__socials">
        <a href="https://github.com/ArnavSingh44" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/arnav-singh-25b7a1165/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://x.com/Goku4Senpai" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/_._arnavsingh_._/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer; 