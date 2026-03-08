import React from "react";
import { useNavigate } from "react-router-dom";
import "./File1.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <section className="home">
      <div className="home-content">
        <h2 className="home-tag">Hi, I'm</h2>
        <h1 className="home-name">Himanshu Suthar</h1>

        <h2 className="home-title">
          Crafting{" "}
          <span className="highlight">exceptional web experiences</span>
          through clean code & design
        </h2>

        <p className="home-subtitle">
          I am a Full-Stack Web Developer specializing in building modern,
          scalable, and visually engaging web applications that connect users
          and businesses seamlessly.
        </p>

        <p className="home-desc">
          With every project, I combine <em>design thinking</em> with robust
          engineering to deliver products that don't just function—they inspire.
          My focus is clarity, performance, and a user-first approach to every
          interface I create.
        </p>

        <p className="home-highlight">
          Let's build something meaningful together.
        </p>

        <div className="home-actions">
          <button className="home-btn" onClick={handleClick}>
            Explore Me →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
