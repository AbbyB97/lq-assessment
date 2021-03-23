import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import quizBanner from "../../dist/images/cardImages/quizBanner.png";
import FadeContainer from "../../widgets/FadeContainer";
import { device } from "../../utils/mediaQuery";

const Home = () => {
  const history = useHistory();
  const goTopQuiz = () => {
    history.push("/quiz");
  };

  return (
    <FadeContainer>
      <StyledHome>
        <h3 className="mb-3">LearnQ Assignment</h3>
        <Container className="card-container ">
          <Card>
            <Card.Img
              className="mx-auto mt-3 w-75"
              variant="top"
              src={quizBanner}
            />
            <Card.Body>
              <Card.Title>Select Your difficulty</Card.Title>
              <Card.Text>
                The Questions will be asked as per this selection
              </Card.Text>
              <Container fluid>
                <Row>
                  <Col md={4} xs={12}>
                    <Button className=" w-100 my-2" variant="secondary">
                      Easy
                    </Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button className="w-100 my-2" variant="secondary">
                      Middle
                    </Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button className="w-100 my-2" variant="secondary">
                      Hard
                    </Button>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col>
                    <Button className="w-100" onClick={goTopQuiz} variant="primary">
                      Continue <i className="fas fa-angle-right"></i>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </StyledHome>
    </FadeContainer>
  );
};

export default Home;

const StyledHome = styled.div`
  h3 {
    margin: 0;
    text-align: center;
    padding: 0;
  }
`;
