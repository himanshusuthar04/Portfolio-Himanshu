import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="notfound">
      <div className="notfound-box">
        <div className="notfound-code">404</div>
        <h2 className="notfound-title">Data Not Found</h2>
        <p className="notfound-text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button className="notfound-btn" onClick={handleClick}>
          Go to Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
