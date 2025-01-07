import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <div>
      Dashboard Page
      <br />
      <button onClick={handleClick}>Move to Home Page</button>
      <br />
      <button onClick={() => {navigate("courses")}}>courses</button>
      <br />
      <button onClick={() => {navigate("mock-test")}}>mocktest</button>
      <br />
      <button onClick={() => {navigate("reports")}}>report</button>

      <Outlet />
       
    </div>
  );
};

export default Dashboard;
