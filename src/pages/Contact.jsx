import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_user_id";

const Contact = () => {
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
      .catch((err) => {
        setError("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Send</button>
        {sent && <p className="contact__success">Message sent!</p>}
        {error && <p className="contact__error">{error}</p>}
      </form>
    </section>
  );
};

export default Contact; 