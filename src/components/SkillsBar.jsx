import React from "react";
import "./SkillsBar.css";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "ReactJS (Basic)", icon: "fab fa-react" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "ReactJS (Basic)", icon: "fab fa-react" },
      { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
    ],
  },
  {
    title: "Technologies",
    skills: [
      { name: "Photoshop", icon: "fas fa-image" },
      { name: "Blender", icon: "fas fa-cube" },
      { name: "C", icon: "fas fa-code" },
      { name: "C++ (Basic)", icon: "fas fa-code" },
      { name: "Z-Brush", icon: "fas fa-paint-brush" },
      { name: "Unreal Engine", icon: "fas fa-gamepad" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Prompt Engineering", icon: "fas fa-lightbulb" },
      { name: "Creative Mindset", icon: "fas fa-brain" },
      { name: "Story Writing", icon: "fas fa-pen-nib" },
      { name: "Good Communication", icon: "fas fa-comments" },
      { name: "Research Skills", icon: "fas fa-search" },
      { name: "Team-Work", icon: "fas fa-users" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "English", icon: "fas fa-language" },
      { name: "Hindi", icon: "fas fa-language" },
    ],
  },
];

const SkillsBar = () => (
  <section className="skills-section" id="skills-section" data-aos="fade-up">
    <h2 className="section-title">My Skills</h2>
    <div className="skills-groups">
      {skillGroups.map((group, idx) => (
        <div className="skills-group" key={group.title} data-aos="fade-up" data-aos-delay={idx * 100}>
          <h3 className="skills-group-title">{group.title}</h3>
          <div className="skills-bar">
            {group.skills.map((skill, i) => (
              <div className="skill-badge" key={i} title={skill.name} data-aos="flip-left" data-aos-delay={i * 60}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsBar; 