import React from "react";
import "./HeroSection.css";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects", value: "2+" },
  { label: "Clients", value: "-" },
  { label: "Awards", value: "-" },
];

const socials = [
  { icon: "fab fa-github", url: "https://github.com/yourprofile" },
  { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/arnav-singh-25b7a1165" },
];

const HeroSection = () => (
  <section className="hero-section" id="hero-section" data-aos="fade-up">
    <div className="hero-content">
      <div className="hero-text">
        <h1>I am <span className="accent">Arnav Singh</span></h1>
        <h2>Web Developer <span className="plus">+</span> Game Developer</h2>
        <div className="hero-contact">
          <div>📞 +91 9815389448</div>
          <div>✉️ arnavajitsingh11@gmail.com</div>
          <div>🔗 <a href="https://www.linkedin.com/in/arnav-singh-25b7a1165" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
        </div>
        <p className="hero-desc">
          Eager to secure a full-time role in the field of web designing/developing and game developing, where I can apply my foundational skills and passion for coding and gaming to contribute to innovative projects and grow professionally within a supportive team environment.
        </p>
        <div className="hero-socials">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-photo" data-aos="zoom-in" data-aos-delay="200">
        <img src="/Myself.jpg" alt="Arnav Singh" className="floating-img" />
      </div>
    </div>
    <div className="hero-stats">
      {stats.map((stat, i) => (
        <div className="hero-stat" key={i}>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection; 