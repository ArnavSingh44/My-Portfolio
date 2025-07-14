import React, { useState } from "react";
import "./ServicesAccordion.css";

const services = [
  {
    title: "Branding Design",
    content: "Modern, memorable branding and logo design for your business or product."
  },
  {
    title: "UI/UX Design",
    content: "User-centered design for web and mobile apps, focusing on usability and delight."
  },
  {
    title: "Web Design",
    content: "Responsive, beautiful websites built for performance and accessibility."
  },
  {
    title: "App Design",
    content: "End-to-end app design, from wireframes to polished interfaces."
  }
];

const ServicesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="services-section" id="services-section" data-aos="fade-up">
      <h2 className="section-title">My Quality Services</h2>
      <div className="accordion">
        {services.map((service, idx) => (
          <div className={`accordion-item${openIndex === idx ? " open" : ""}`} key={service.title}>
            <button className="accordion-title" onClick={() => setOpenIndex(idx)}>
              <span>{service.title}</span>
              <span className="accordion-arrow">{openIndex === idx ? "▲" : "▼"}</span>
            </button>
            <div className="accordion-content" style={{ display: openIndex === idx ? "block" : "none" }}>
              {service.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAccordion; 