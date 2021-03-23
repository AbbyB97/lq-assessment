import React from "react";
import { Link } from "react-router-dom";

const QuizComponent = () => {
  return (
    <div style={{ height: "50vh", backgroundColor: "pink" }}>
      Quiz
      <Link to="/"> click here </Link>
    </div>
  );
};

export default QuizComponent;
