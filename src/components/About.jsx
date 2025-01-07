import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div>
      About Us
      <br />
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  );
};

export default About;
