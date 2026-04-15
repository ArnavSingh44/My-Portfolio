import React from "react";
import "./SkillsSection.css";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 70 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    category: "Tools & Tech",
    icon: "⚙️",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Figma / Photoshop", level: 65 },
      { name: "Blender", level: 60 },
      { name: "Unreal Engine", level: 55 },
    ],
  },
  {
    category: "Game Dev",
    icon: "🎮",
    skills: [
      { name: "C / C++", level: 65 },
      { name: "Unreal Engine", level: 55 },
      { name: "Z-Brush", level: 50 },
      { name: "3D Animations", level: 60 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    skills: [
      { name: "Prompt Engineering", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Team Work", level: 85 },
      { name: "Creative Thinking", level: 88 },
    ],
  },
];

const techBadges = [
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#264de4", textColor: "var(--accent-light)" },
  { name: "JavaScript", color: "#f7df1e", textColor: "#d9c300" },
  { name: "React", color: "#61dafb", textColor: "#0088cc" },
  { name: "Tailwind", color: "#06b6d4" },
  { name: "Git", color: "#f05032" },
  { name: "GitHub", color: "#6e7681", textColor: "var(--text-primary)" },
  { name: "C / C++", color: "#00599c", textColor: "var(--accent-light)" },
  { name: "Figma", color: "#f24e1e" },
  { name: "Blender", color: "#ea7600" },
  { name: "Unreal Engine", color: "#5c6a99", textColor: "var(--accent-light)" },
  { name: "Photoshop", color: "#31a8ff" },
];

const SkillsSection = () => (
  <section className="skills-section" id="skills-section">
    <div className="skills-header" data-aos="fade-up">
      <span className="section-eyebrow">I CONSTANTLY TRY TO IMPROVE</span>
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
    </div>

    <div className="skills-cards" data-aos="fade-up" data-aos-delay="100">
      {skillGroups.map((group, idx) => (
        <div
          className="skill-card glass-card"
          key={group.category}
          data-aos="fade-up"
          data-aos-delay={idx * 80}
        >
          <div className="skill-card-header">
            <span className="skill-icon">{group.icon}</span>
            <h3 className="skill-category">{group.category}</h3>
          </div>
          <div className="skill-bars">
            {group.skills.map((skill) => (
              <div className="skill-bar-wrap" key={skill.name}>
                <div className="skill-bar-label">
                  <span>{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div className="tech-badges-wrap" data-aos="fade-up" data-aos-delay="200">
      <p className="tech-badges-label">Tech I've worked with</p>
      <div className="tech-badges">
        {techBadges.map((tech) => (
          <span
            key={tech.name}
            className="tech-badge"
            style={{
              background: `${tech.color}22`,
              borderColor: `${tech.color}55`,
              color: tech.textColor || tech.color,
            }}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
