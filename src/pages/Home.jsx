import React from "react";
import "./Home.css";

const Home = () => {
  const handleScroll = () => {
    const projects = document.getElementById("projects-section");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home-hero">
      <h1>Arnav Sharma</h1>
      <h2>Full Stack Developer</h2>
      <p>Welcome to my portfolio! I build modern, responsive web applications with a focus on great user experience.</p>
      <button className="cta-btn" onClick={handleScroll}>View Projects</button>
    </section>
  );
};

export default Home; 