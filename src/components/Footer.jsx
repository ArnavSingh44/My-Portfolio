import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name">Arnav</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-tagline">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <ul>
            {["about-section","skills-section","experience-section","projects-section","education-section","contact-section"].map((id) => (
              <li key={id}>
                <button onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}>
                  {id.replace("-section","").charAt(0).toUpperCase() + id.replace("-section","").slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com/ArnavSingh44" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/arnav-singh-25b7a1165" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com/Goku4Senpai" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
            <li><a href="https://www.instagram.com/_._arnavsingh_._/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Arnav Singh. All rights reserved.
        </p>
        <p className="footer-made">
          Designed &amp; Built with <span className="heart">❤️</span> by Arnav Singh
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;