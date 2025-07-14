import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_user_id";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(() => {
        setSent(true);
      })
      .catch(() => {
        setError("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="contact-section" id="contact-section">
      <h2 className="section-title">Let's work together!</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Send</button>
        {sent && <p className="contact-success">Message sent!</p>}
        {error && <p className="contact-error">{error}</p>}
      </form>
      <div className="contact-info">
        <div>📞 +91 9815389448</div>
        <div>✉️ <a href="mailto:arnavajitsingh11@gmail.com">arnavajitsingh11@gmail.com</a></div>
        <div>🔗 <a href="https://www.linkedin.com/in/arnav-singh-25b7a1165" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
        <div>Location: New Delhi, India</div>
      </div>
    </section>
  );
};

export default ContactForm; 