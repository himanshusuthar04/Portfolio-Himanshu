import React from "react";
import { useNavigate } from "react-router-dom";
import "./File6.css";

const steps = [
  {
    number: "01",
    title: "Strong Foundations",
    text: "Started with HTML, CSS, and JavaScript fundamentals to understand structure, styling, and interactivity.",
  },
  {
    number: "02",
    title: "Frontend Growth",
    text: "Completed frontend development course and built responsive, React-based user interfaces.",
  },
  {
    number: "03",
    title: "Real-World Practice",
    text: "Worked with APIs, state management, async workflows, and real-world projects.",
  },
  {
    number: "04",
    title: "Full-Stack Path",
    text: "Joined Full Stack Development course at Grass IT Solutions (September 2025).",
  },
];

const Journey = () => {
  const navigate = useNavigate();

  return (
    <section className="journey">
      <div className="journey-wrapper">
        <div className="journey-header">
          <h2 className="journey-tag">My Journey</h2>
          <h1 className="journey-title">
            Learning by <span>Building</span>
          </h1>
        </div>

        <p className="journey-intro">
          My journey into web development began one year ago, driven by
          curiosity and a strong desire to create things from scratch. I quickly
          realised that the best way I learn is by building real projects,
          experimenting with ideas, and improving through practice.
        </p>

        <p className="journey-intro">
          Every component I write and every feature I build adds to my
          understanding of how modern web applications truly work.
        </p>

        <div className="journey-content">
          <h3>How It Started</h3>
          <p>
            I began with the fundamentals—HTML, CSS, and JavaScript—focusing on
            building small UI sections rather than memorising syntax. This
            helped me develop a strong and practical foundation.
          </p>

          <h3>Moving Into React & Frontend</h3>
          <p>
            As my confidence grew, I transitioned into React, learning component
            architecture, state handling, and responsive UI development using
            modern libraries.
          </p>

          <h3>Real-World Learning & APIs</h3>
          <p>
            Working with REST APIs pushed my understanding further—handling
            loading states, errors, and real product behaviour beyond static
            websites.
          </p>

          <h3>Where I Am Now</h3>
          <p>
            Based in Ahmedabad, I code every day—improving my projects, refining
            my skills, and preparing to build complete end-to-end applications.
            This journey is still in progress.
          </p>
        </div>

        <div className="journey-timeline">
          {steps.map((step, index) => (
            <div className="timeline-item" key={index}>
              <span>{step.number}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="journey-btn" onClick={() => navigate("/contact")}>
          Contact Me →
        </button>
      </div>
    </section>
  );
};

export default Journey;
