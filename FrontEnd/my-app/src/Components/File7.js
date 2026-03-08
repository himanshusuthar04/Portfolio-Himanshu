import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./File7.css";
import axios from "axios";

const File7 = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/contact", form);

      if (res.status === 200) {
        alert("Message sent successfully 🚀");

        // Clear form
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message ❌");
    }
  };

  return (
    <section className="contact">
      <div className="contact-wrapper">
        <h2 className="contact-tag">Contact</h2>
        <h1 className="contact-title">
          Let's <span>Connect</span>
        </h1>

        <p className="contact-intro">
          Have a project in mind, a role to discuss, or an idea you’d like to
          explore?
        </p>

        <p className="contact-intro">
          I'm always open to meaningful conversations—whether it’s about
          building a product, improving an existing interface, or collaborating
          on something exciting.
        </p>

        <p className="contact-intro">
          Feel free to reach out. I’d love to hear from you.
        </p>

        <div className="contact-why">
          <h3>Why Reach Out?</h3>
          <ul>
            <li>New project ideas</li>
            <li>Frontend or full-stack opportunities</li>
            <li>Freelance or collaboration work</li>
            <li>Product improvements or UI refinement</li>
          </ul>
          <p>No pressure. Just a simple conversation to start.</p>
        </div>

        <div className="contact-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshusuthar1124@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            📧 himanshusuthar1124@gmail.com
          </a>

          <a
            href="https://github.com/himanshusuthar04"
            target="_blank"
            rel="noreferrer"
          >
            💻 github.com/himanshusuthar04
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-suthar-539b62374/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 linkedin.com/in/Himanshu-Suthar
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message →</button>
        </form>

        <button className="contact-back" onClick={() => navigate("/")}>
          Back to Home →
        </button>
      </div>
    </section>
  );
};

export default File7;
