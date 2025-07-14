import React, { useState } from "react";
import "./ProjectsGrid.css";

const projects = [
  {
    title: "Anime World Website",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    description: "A sleek, interactive website for anime fans, featuring smooth animations, responsive design, and easy navigation. Built in HTML, CSS, and JavaScript.",
    demo: "#",
    github: "#"
  },
  {
    title: "Bloodline Vengeance (Ongoing)",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    description: "A dynamic and immersive action-adventure RPG set in a vast, intricately crafted fantasy world. Players assume the role of a 'Yama,' a rare individual with a dark past.",
    demo: "#",
    github: "#"
  },
  // Added Movie Finder project
  {
    title: "Movie Finder",
    image: "https://cdn-icons-png.flaticon.com/512/833/833314.png", // Using a generic movie search icon as a placeholder
    description: "A responsive React app to search movies, filter by genre, and manage a watchlist using the TMDB API. Features dark/light mode, infinite scroll, and a modern UI.",
    demo: "#", // Add your live demo link here if available
    github: "https://github.com/ArnavSingh44/Movie-Finder"
  }
];

const tabs = ["All", "Web", "Game"];

const ProjectsGrid = () => {
  const [activeTab, setActiveTab] = useState(0);
  // For demo, all projects shown for all tabs
  return (
    <section className="projects-section" id="projects-section" data-aos="fade-up">
      <h2 className="section-title">My Recent Works</h2>
      <div className="projects-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`projects-tab${activeTab === idx ? " active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx} data-aos="zoom-in-up" data-aos-delay={idx * 100}>
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid; 