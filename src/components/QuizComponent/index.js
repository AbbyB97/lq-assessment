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
            <Card.Body>
              <Card.Title>Answer the question</Card.Title>
              <Card.Text>Why sky is blue?</Card.Text>
              <Container fluid>
                <Row>Option</Row>
                <Row>Option</Row>
                <Row>Option</Row>
                <Row>Option</Row>
                <Row>
                  <Col>
                    <Button
                      className="w-100"
                      onClick={() => console.log("next")}
                      variant="primary"
                    >
                      Next <i className="fas fa-angle-right"></i>
                    </Button>
                  </Col>
                </Row>
              </Container>
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
