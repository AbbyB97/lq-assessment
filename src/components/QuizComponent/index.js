import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import styled from "styled-components";
import FadeContainer from "../../widgets/FadeContainer";

const QuizComponent = () => {
  return (
    <FadeContainer>
      <StyledQuizComp>
        <h3 className="mb-3">LearnQ Assignment</h3>
        <Container className="card-container ">
          <Card>
            {/* <Card.Img
              className="mx-auto mt-3 w-75"
              variant="top"
              src={quizBanner}
            /> */}
            <Card.Body>
              <Card.Title>Select Your difficulty</Card.Title>
              <Card.Text>
                The Questions will be asked as per this selection
              </Card.Text>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <Button className="mx-2" variant="secondary">
                    Easy
                  </Button>
                  <Button className="mx-2" variant="secondary">
                    Middle
                  </Button>
                  <Button className="mx-2" variant="secondary">
                    Hard
                  </Button>
                </div>
                <Button
                  // onClick={goTopQuiz}
                  variant="primary"
                >
                  <i className="fas fa-angle-right"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </StyledQuizComp>
    </FadeContainer>
  );
};

export default QuizComponent;

const StyledQuizComp = styled.div`
  h3 {
    margin: 0;
    text-align: center;
    padding: 0;
  }
`;
