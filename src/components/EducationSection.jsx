import React from "react";
import "./EducationSection.css";

const education = [
  {
    period: "2021 – 2025",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "DCRUST, Murthal, Sonipat",
    grade: "Current Student",
    icon: "🎓",
  },
  {
    period: "2020 – 2021",
    degree: "Senior Secondary (PCM)",
    institution: "Tagore International Senior Secondary School, Punjab",
    grade: "70%",
    icon: "📚",
  },
  {
    period: "2018 – 2019",
    degree: "Secondary Education",
    institution: "Delhi Public School, HRIT Campus, Ghaziabad",
    grade: "82%",
    icon: "🏫",
  },
];

const EducationSection = () => (
  <section className="education-section" id="education-section">
    <div className="edu-header" data-aos="fade-up">
      <span className="section-eyebrow">ACADEMIC MILESTONES</span>
      <h2 className="section-title">Education</h2>
    </div>

    <div className="edu-timeline">
      {education.map((item, i) => (
        <div
          className="edu-item"
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <div className="edu-connector">
            <div className="edu-icon-wrap">{item.icon}</div>
            {i < education.length - 1 && <div className="edu-line"></div>}
          </div>

          <div className="edu-card glass-card">
            <div className="edu-card-top">
              <span className="edu-period">{item.period}</span>
              <span className="edu-grade">{item.grade}</span>
            </div>
            <h3 className="edu-degree">{item.degree}</h3>
            <p className="edu-institution">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              {item.institution}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
