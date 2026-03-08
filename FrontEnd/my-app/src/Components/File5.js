import React from "react";
import { useNavigate } from "react-router-dom";
import "./File5.css";

const services = [
  {
    title: "React Websites",
    subtitle: "Modern, scalable web applications",
    desc: `I build fast, responsive, and scalable React-based websites and applications using clean component architecture and modern development practices.

My focus is on performance, maintainability, and user experience—ensuring your application remains reliable as it grows.

From single-page applications to complex multi-view platforms, I create React solutions that feel smooth, intuitive, and production-ready.`,
  },
  {
    title: "UI Development",
    subtitle: "Design to pixel-perfect execution",
    desc: `I convert designs into fully functional, responsive web pages with precision and attention to detail.

Whether the design comes from Figma, Adobe XD, or reference layouts, I focus on spacing, typography, accessibility, and consistency—so the final interface feels exactly as intended.`,
  },
  {
    title: "API Integration",
    subtitle: "Dynamic, data-driven experiences",
    desc: `I integrate REST APIs to deliver real-time, dynamic content within your application.

This includes handling loading states, error scenarios, and data updates smoothly—ensuring users always receive clear feedback and consistent performance.`,
  },
  {
    title: "Bug Fixing & UI Improvements",
    subtitle: "Refined, stable, and user-friendly",
    desc: `I identify and resolve UI bugs, layout issues, and interaction problems that affect usability.

This includes fixing broken components, improving responsiveness, and refining animations or transitions—polishing the details that elevate the overall experience.`,
  },
  {
    title: "Performance Optimisation",
    subtitle: "Speed, efficiency, and scalability",
    desc: `I optimise website performance by reducing load times, improving rendering efficiency, and ensuring smooth interactions across devices.

A fast website builds trust, improves engagement, and supports growth—and performance is always a priority in my work.`,
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-tag">Services</h2>
        <h1 className="services-title">
          What I Can <span>Do For You</span>
        </h1>

        <p className="services-intro">
          I help individuals, startups, and growing teams build high-quality web
          experiences that are fast, reliable, and easy to scale. My approach
          combines clean frontend engineering with strong product thinking—so
          every solution is designed to perform in real-world conditions.
        </p>

        <p className="services-intro secondary">
          Scroll through my services to see how I can support your product from
          idea to launch.
        </p>

        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <span className="service-subtitle">{service.subtitle}</span>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="services-approach">
          <h3>My Approach</h3>
          <p>
            Every service I offer is guided by three core principles:
            <strong> clarity</strong>, <strong>performance</strong>, and{" "}
            <strong>scalability</strong>.
          </p>
          <p>
            I don't just build features—I build solutions that are easy to
            maintain, easy to extend, and easy for users to enjoy.
          </p>
        </div>

        <div className="services-cta">
          <h3>Let's Work Together</h3>
          <p>
            If you're building a product, improving an existing website, or
            looking for reliable frontend support, I'm ready to help.
          </p>

          <button className="services-btn" onClick={() => navigate("/journey")}>
            View Journey →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
