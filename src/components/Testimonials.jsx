import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Priya S.",
    text: "Arnav is a fantastic developer and designer. He delivered our project on time and exceeded expectations!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul M.",
    text: "Great communication and top-notch skills. Highly recommended for any web project.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

const Testimonials = () => (
  <section className="testimonials-section" id="testimonials-section" data-aos="fade-up">
    <h2 className="section-title">My Client's Stories</h2>
    <div className="testimonials-list">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i} data-aos="fade-right" data-aos-delay={i * 120}>
          <div className="testimonial-avatar">
            <img src={t.avatar} alt={t.name} />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-name">{t.name}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 