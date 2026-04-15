import React, { useState } from "react";
import "./ProjectsSection.css";

const projects = [
  {
    id: 1,
    title: "Anime World Website",
    category: "Web",
    period: "2023",
    description: "A sleek, interactive website for anime fans featuring smooth animations, responsive design, and easy navigation. Built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    demo: "#",
    github: "https://github.com/ArnavSingh44",
    featured: false,
  },
  {
    id: 2,
    title: "Movie Finder",
    category: "Web",
    period: "2024",
    description: "A responsive React app to search movies, filter by genre, and manage a personal watchlist using the TMDB API. Features dark/light mode, infinite scroll, and a modern UI.",
    tags: ["React", "TMDB API", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    demo: "https://movie-finder-ten-iota.vercel.app",
    github: "https://github.com/ArnavSingh44/Movie-Finder",
    featured: true,
  },
  {
    id: 3,
    title: "Bloodline Vengeance",
    category: "Game",
    period: "2023 – Present",
    description: "An immersive action-adventure RPG set in a vast fantasy world. Players assume the role of a 'Yama' — a rare individual with a dark past seeking vengeance.",
    tags: ["Unreal Engine", "C++", "Blender", "Z-Brush"],
    image: "/projects/bloodline-vengeance.png",
    demo: "https://www.reclonestudio.com/",
    github: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Resume Builder (Resumify)",
    category: "Web",
    period: "2024",
    description: "A full-stack resume builder with authentication, PDF export via Puppeteer, and a modern React frontend. Deployed on Vercel with Supabase PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Puppeteer"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
    demo: "#",
    github: "https://github.com/ArnavSingh44",
    featured: false,
  },
];

const tabs = ["All", "Web", "Game"];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-header" data-aos="fade-up">
        <span className="section-eyebrow">A SELECTION OF MY RECENT WORK</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Showcasing my problem-solving skills, creativity, and technical expertise.
        </p>
      </div>

      <div className="projects-tabs" data-aos="fade-up" data-aos-delay="80">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`projects-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, idx) => (
          <div
            className={`project-card glass-card ${project.featured ? "featured" : ""}`}
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            {project.featured && (
              <div className="project-featured-badge">⭐ Featured</div>
            )}
            <div className="project-img-wrap">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-img-overlay">
                <div className="project-overlay-links">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn outline"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-body">
              <div className="project-meta">
                <span className="project-period">{project.period}</span>
                <span className="project-category-tag">{project.category}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta" data-aos="fade-up">
        <a
          href="https://github.com/ArnavSingh44"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
