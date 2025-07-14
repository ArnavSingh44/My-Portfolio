import React from "react";
import "./BlogPreview.css";

const blogs = [
  {
    title: "How to Build a Modern Portfolio in React",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    date: "Jul 2024",
    desc: "A step-by-step guide to building a beautiful, responsive portfolio website using React and CSS.",
    url: "#"
  },
  {
    title: "UI/UX Tips for Developers",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    date: "Jun 2024",
    desc: "Essential UI/UX principles every developer should know for better web apps.",
    url: "#"
  },
  {
    title: "Designing for Dark Mode",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    date: "May 2024",
    desc: "Best practices for implementing and designing dark mode in your projects.",
    url: "#"
  }
];

const BlogPreview = () => (
  <section className="blog-section" id="blog-section" data-aos="fade-up">
    <h2 className="section-title">Recent Blogs</h2>
    <div className="blog-list">
      {blogs.map((blog, i) => (
        <a className="blog-card" href={blog.url} key={i} target="_blank" rel="noopener noreferrer" data-aos="flip-up" data-aos-delay={i * 100}>
          <img src={blog.image} alt={blog.title} className="blog-img" />
          <div className="blog-info">
            <div className="blog-date">{blog.date}</div>
            <div className="blog-title">{blog.title}</div>
            <div className="blog-desc">{blog.desc}</div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default BlogPreview; 