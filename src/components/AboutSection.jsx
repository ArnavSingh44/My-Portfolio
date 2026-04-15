import React from "react";
import "./AboutSection.css";

const AboutSection = () => (
  <section className="about-section" id="about-section">
    <div className="about-grid">
      <div className="about-left" data-aos="fade-right">
        <div className="about-image-wrap">
          <div className="about-image-bg"></div>
          <img src="/Myself.jpg" alt="Arnav Singh" className="about-image" />
          <div className="about-image-badge">
            <span>💻</span>
            <span>Full-Stack Dev</span>
          </div>
        </div>
      </div>

      <div className="about-right" data-aos="fade-left" data-aos-delay="100">
        <span className="section-eyebrow">GET TO KNOW ME</span>
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          Hello! I'm a passionate <strong>Web & Game Developer</strong> with expertise in building 
          exceptional digital experiences. I specialize in creating modern, responsive, and performant 
          web applications using cutting-edge technologies.
        </p>
        <p className="about-text">
          With a strong foundation in both <strong>frontend development</strong> and <strong>game development</strong>, 
          I bring ideas to life through clean, efficient code and thoughtful user experiences. 
          My approach combines technical excellence with a keen eye for design and usability.
        </p>

        <div className="about-info-grid">
          <div className="about-info-item">
            <span className="info-label">Name</span>
            <span className="info-value">Arnav Singh</span>
          </div>
          <div className="about-info-item">
            <span className="info-label">Email</span>
            <span className="info-value">arnavajitsingh11@gmail.com</span>
          </div>
          <div className="about-info-item">
            <span className="info-label">Phone</span>
            <span className="info-value">+91 9815389448</span>
          </div>
          <div className="about-info-item">
            <span className="info-label">Location</span>
            <span className="info-value">New Delhi, India</span>
          </div>
          <div className="about-info-item">
            <span className="info-label">Availability</span>
            <span className="info-value available">Available for hire</span>
          </div>
        </div>

        <a href="/Arnav's Resume (2).pdf" download className="btn-primary about-resume-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          View Resume
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;
