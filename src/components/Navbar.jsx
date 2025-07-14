import React from "react";
import "./Navbar.css";
import { useTheme } from "../themeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => scrollTo("hero-section")}>Arnav</div>
      <ul className="navbar__links">
        <li><button onClick={() => scrollTo("services-section")}>Services</button></li>
        <li><button onClick={() => scrollTo("projects-section")}>Projects</button></li>
        <li><button onClick={() => scrollTo("expedu-section")}>Experience</button></li>
        <li><button onClick={() => scrollTo("skills-section")}>Skills</button></li>
        <li><button onClick={() => scrollTo("testimonials-section")}>Testimonials</button></li>
        <li><button onClick={() => scrollTo("contact-section")}>Contact</button></li>
        <li><a href="/resume.pdf" download className="navbar__resume-btn">Resume</a></li>
        <li><button className="theme-toggle-mini" onClick={toggleTheme} aria-label="Toggle theme">{theme === "light" ? "🌙" : "☀️"}</button></li>
      </ul>
    </nav>
  );
};

export default Navbar; 