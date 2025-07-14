import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.",
    github: "https://github.com/arnav/portfolio",
    demo: "https://arnav-portfolio.com",
  },
  {
    title: "Task Manager",
    description: "A simple task management app with authentication.",
    github: "https://github.com/arnav/task-manager",
    demo: "https://arnav-task-manager.com",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with comments and likes.",
    github: "https://github.com/arnav/blog-platform",
    demo: "https://arnav-blog.com",
  },
];

const Projects = () => (
  <section className="projects" id="projects-section">
    <h2>Projects</h2>
    <div className="projects__grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects; 