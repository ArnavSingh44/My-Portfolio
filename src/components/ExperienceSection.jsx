import React from "react";
import "./ExperienceSection.css";

const experiences = [
  {
    period: "2025 – Present",
    location: "Delhi, India",
    role: "Co-Founder & 3D Animator & Creative Design",
    company: "Reclone Studio",
    type: "Co-Founder",
    description: "Creating 3D animation for characters and cinematics, designing stories and bringing creativity to reality through immersive visual storytelling.",
    tags: ["Cascadeur", "Unreal Engine", "Blender", "Photoshop", "Da Vinci Resolve"],
  },
  {
    period: "2023 – 2025",
    location: "India (Remote)",
    role: "Web Developer & Game Developer",
    company: "Personal & Academic Projects",
    type: "Self-Employed",
    description: "Building full-stack web applications, interactive UI experiences, and developing an action-adventure RPG game from scratch using Unreal Engine and C++.",
    tags: ["React", "JavaScript", "CSS", "Unreal Engine", "C++", "Blender"],
  },
];

const ExperienceSection = () => (
  <section className="experience-section" id="experience-section">
    <div className="exp-header" data-aos="fade-up">
      <span className="section-eyebrow">WHERE I'VE BUILT</span>
      <h2 className="section-title">Experience</h2>
    </div>

    <div className="exp-timeline">
      {experiences.map((exp, i) => (
        <div className="exp-item" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
          <div className="exp-left">
            <div className="exp-period">{exp.period}</div>
            <div className="exp-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {exp.location}
            </div>
          </div>

          <div className="exp-connector">
            <div className="exp-dot"></div>
            <div className="exp-line"></div>
          </div>

          <div className="exp-right glass-card">
            <div className="exp-header-row">
              <div>
                <div className="exp-type">{exp.type}</div>
                <h3 className="exp-role">{exp.role}</h3>
                <div className="exp-company">@ {exp.company}</div>
              </div>
            </div>
            <p className="exp-desc">{exp.description}</p>
            <div className="exp-tags">
              {exp.tags.map((tag) => (
                <span className="exp-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
