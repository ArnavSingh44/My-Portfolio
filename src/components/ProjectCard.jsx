import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, github, demo }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="project-card__links">
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={demo} target="_blank" rel="noopener noreferrer" className="project-card__demo-btn">Live Demo</a>
    </div>
  </div>
);

export default ProjectCard; 