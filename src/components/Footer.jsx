import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Arnav Singh. All rights reserved.
      </div>
      <div className="footer__socials">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  </footer>
);

export default Footer; 