import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import StyledContainer from "../../widgets/StyledContainer";
const Home = () => {
  return (
    <StyledContainer style={{ height: "50vh", backgroundColor: "red" }}>
      Home
      <Link to="/quiz">click here</Link>
    </StyledContainer>
  );
};

export default Home;
