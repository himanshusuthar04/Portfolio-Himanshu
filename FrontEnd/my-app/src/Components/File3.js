import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import "./File3.css";

const Skill = () => {
  const navigate = useNavigate();

  const skills = [
    {
      icon: <FaHtml5 />,
      title: "Frontend Development",
      desc: "HTML5, CSS3, JavaScript (ES6+), React.js, Redux, Tailwind CSS, Material UI, Responsive Web Design",
      level: "95%",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend Development",
      desc: "Node.js, Express.js, REST APIs, Authentication, Authorization, Server-side Logic",
      level: "70%",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      desc: "MongoDB, SQL, Data Modeling, CRUD Operations, Performance Optimization",
      level: "85%",
    },
    {
      icon: <FaTools />,
      title: "Tools & Workflow",
      desc: "Git, GitHub, Postman, Axios, VS Code, Debugging, Deployment Basics",
      level: "90%",
    },
    {
      icon: <FaReact />,
      title: "UI / UX & Performance",
      desc: "Component Architecture, Reusable UI, Animations, UX Principles, Web Performance",
      level: "85%",
    },
  ];

  return (
    <section className="skill-section">
      <div className="skill-container">
        <h2 className="skill-tag">Skills</h2>
        <h1 className="skill-title">
          My <span>Technical Expertise</span>
        </h1>

        <div className="skill-grid">
          {skills.map((item, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <span className="skill-icon">{item.icon}</span>
                <h3>{item.title}</h3>
              </div>

              <p className="skill-desc">{item.desc}</p>

              <div className="skill-progress-wrap">
                <div
                  className="skill-progress-bar"
                  style={{ width: item.level }}
                ></div>
              </div>

              <span className="skill-level">{item.level}</span>
            </div>
          ))}
        </div>
 
        <button className="skill-btn" onClick={() => navigate("/projects")}>
          View Projects →
        </button>
      </div>
    </section>
  );
};

export default Skill;
