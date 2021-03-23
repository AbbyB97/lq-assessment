import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ height: "50vh", backgroundColor: "red" }}>
      Home
      <Link to="/quiz">click here</Link>
    </div>
  );
};

export default Home;
