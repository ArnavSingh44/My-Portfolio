import React from "react";
import "./ExperienceEducation.css";

const experience = [
  { year: "2023-Now", title: "Web Developer | Game Developer", desc: "Personal & Academic Projects" },
];

const education = [
  { year: "2021-2025", title: "B.Tech in Computer Science & Engineering", desc: "DCRUST, Sonipat" },
  { year: "2020-2021", title: "Higher Secondary (PCM) - 70%", desc: "Tagore International Senior Secondary School, Punjab" },
  { year: "2018-2019", title: "Secondary Education - 82%", desc: "Delhi Public School, HRIT Campus, Ghaziabad, UP" },
];

const ExperienceEducation = () => (
  <section className="expedu-section" id="expedu-section" data-aos="fade-up">
    <div className="expedu-columns">
      <div className="expedu-col">
        <h2 className="section-title">My Experience</h2>
        <div className="expedu-list">
          {experience.map((item, i) => (
            <div className="expedu-item" key={i}>
              <div className="expedu-year">{item.year}</div>
              <div className="expedu-title">{item.title}</div>
              <div className="expedu-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="expedu-col">
        <h2 className="section-title">My Education</h2>
        <div className="expedu-list">
          {education.map((item, i) => (
            <div className="expedu-item" key={i}>
              <div className="expedu-year">{item.year}</div>
              <div className="expedu-title">{item.title}</div>
              <div className="expedu-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceEducation; 