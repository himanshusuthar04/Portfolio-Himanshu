import React from "react";
import { useNavigate } from "react-router-dom";
import "./File2.css";

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/skill");
  }

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <h3 className="about-subtitle">
          Passionate Web Developer & Lifelong Learner
        </h3>

        <p>
          Hello! I'm <span className="highlight">Himanshu Suthar</span>, a
          Full-Stack Web Developer with a{" "}
          <strong>Grass It Solution (Ahmedabad)</strong> and a deep passion for
          crafting engaging digital experiences. My journey into web development
          started with curiosity about how the web works and evolved into a
          dedicated career building modern, scalable, and visually appealing web
          applications.
        </p>

        <p>
          I specialize in <span className="highlight">React.js</span>, along
          with other frontend technologies, where I transform complex ideas into
          polished, intuitive, and responsive user interfaces. I am equally
          comfortable working on backend systems to ensure seamless
          functionality and smooth user experiences.
        </p>

        <p>
          My work philosophy revolves around{" "}
          <em>clean code, performance, and usability</em>. I write reusable
          components, manage application state efficiently, and pay attention to
          every detail—from animations to accessibility— ensuring each project
          meets high-quality standards.
        </p>

        <p>
          Academically, I hold a <strong>Grass It Solution (Ahmedabad)</strong>,
          which has helped me develop critical thinking, problem-solving, and
          communication skills— all vital for collaborative and innovative web
          development.
        </p>

        <p>
          Beyond coding, I enjoy exploring new technologies, improving my
          workflow, and staying updated with modern web standards. My ultimate
          goal is to deliver digital products that are not only functional but
          delightful, scalable, and user-centric.
        </p>

        <div className="about-actions">
          <button className="about-btn" onClick={handleClick}>
            View Skills →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
