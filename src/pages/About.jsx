import React from "react";
import "./About.css";

const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "MongoDB", "Express"];

const About = () => (
  <section className="about">
    <div className="about__profile">
      <img src="https://via.placeholder.com/150" alt="Profile" className="about__img" />
      <div>
        <h2>About Me</h2>
        <p>
          Hi! I'm Arnav Sharma, a passionate developer who loves building web apps that delight users and solve real-world problems.
        </p>
      </div>
    </div>
    <div className="about__skills">
      <h3>Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default About; 