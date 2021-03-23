import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledContainer from "../../widgets/StyledContainer";

const QuizComponent = () => {
  return (
    <StyledContainer style={{ height: "50vh", backgroundColor: "pink" }}>
      Quiz
      <Link to="/"> click here </Link>
    </StyledContainer>
  );
};

export default QuizComponent;
