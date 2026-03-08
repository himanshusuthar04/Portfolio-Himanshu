import React from "react";
import { useNavigate } from "react-router-dom";
import "./File4.css";

const projects = [
  {
    title: "React API Platform",
    tagline: "Real-time data, engineered for performance",
    desc: `This project focuses on building a high-performance, data-driven web application using React. 
    Real-time data is fetched from REST APIs using Axios and rendered through clean, reusable components.

    Special attention was given to loading states, error handling, and state management to ensure a smooth 
    and reliable user experience—similar to modern startup dashboards and analytics platforms.`,
    tech: "React, REST APIs, Axios, Component Architecture, Performance Optimisation",
  },
  {
    title: "Authentication System (Login & Signup)",
    tagline: "Secure, frictionless user onboarding",
    desc: `A production-ready authentication interface designed with user trust and usability in mind.
    This project includes clean form validation, responsive layouts, and intuitive UX patterns inspired 
    by applications like Uber and Rapido.

    The goal was to create an onboarding experience that feels effortless, fast, and secure across all devices.`,
    tech: "React, Form Validation, Responsive Design, UX Principles, Modern CSS",
  },
  {
    title: "Personal Portfolio Website",
    tagline: "Design-driven developer brand experience",
    desc: `A fully responsive personal portfolio built using React to showcase skills, projects, and professional growth.
    The layout, typography, and animations are inspired by Awwwards and Dribbble-featured portfolios.

    This project highlights storytelling through design—guiding users smoothly through content while maintaining 
    fast load times and clean architecture.`,
    tech: "React, UI/UX Design, Animations, Responsive Layouts, Clean Code Practices",
  },
  {
    title: "Dashboard Interface Concept",
    tagline: "Clarity through visual structure",
    desc: `A modern dashboard UI designed to present complex data in a simple, readable format.
    The focus was on component reusability, spacing, and visual hierarchy—similar to startup admin panels 
    and SaaS platforms.`,
    tech: "React, Component Design, UI Systems, Layout Engineering",
  },
  {
    title: "E-Commerce UI Concept",
    tagline: "Conversion-focused product design",
    desc: `A mobile-first e-commerce interface built with a strong emphasis on usability and flow.
    The project focuses on intuitive navigation, product presentation, and smooth interactions 
    to improve user engagement and conversion.`,
    tech: "React, UX Thinking, Mobile-First Design, Responsive UI",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-tag">My Work</h2>
        <h1 className="projects-title">
          Featured <span>Projects</span>
        </h1>

        <p className="projects-intro">
          I build digital products with a strong focus on clarity, performance,
          and real-world usability. Each project is approached as a product—not
          just a demo—where design, engineering, and user experience work
          together seamlessly.
        </p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <span className="project-tagline">{project.tagline}</span>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tech">
                <strong>Technologies & Skills:</strong>
                <span>{project.tech}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-philosophy">
          <h3>Project Philosophy</h3>
          <p>
            I approach every project with a product mindset. That means
            prioritising performance, scalability, and user experience from the
            very first line of code. Clean architecture, reusable components,
            and thoughtful design decisions are core to my development process.
          </p>

          <p>
            I believe the best digital products are built where engineering
            precision meets design clarity.
          </p>
        </div>

        <div className="projects-cta">
          <h3>Let's Build Something Great</h3>
          <p>
            If you're looking for a developer who understands both code and
            product thinking, I'm always open to new opportunities,
            collaborations, and challenging projects.
          </p>

          <button
            className="projects-btn"
            onClick={() => navigate("/services")}
          >
            View Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
