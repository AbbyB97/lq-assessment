import React, { useState } from "react";
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
import Rodal from "rodal";
import confusedRobo from "../../dist/images/cardImages/confusedRobo.png";

const Home = () => {
  const history = useHistory();
  const [difficulty, setDifficulty] = useState("");
  const [visible, setVisible] = useState(false);
  const goTopQuiz = () => {
    console.log("selected dff", difficulty);
    if (difficulty !== "") {
      history.push("/quiz");
    } else {
      setVisible(true);
    }
  };

  return (
    <FadeContainer>
      <StyledHome>
        <h3 className="mb-3">LearnQ Assignment</h3>
        <Container className="card-container pb-3 ">
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
                    <Button
                      className=" w-100 my-2"
                      onClick={() => setDifficulty("easy")}
                      variant="secondary"
                    >
                      Easy
                    </Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button
                      className="w-100 my-2"
                      onClick={() => setDifficulty("medium")}
                      variant="secondary"
                    >
                      Medium
                    </Button>
                  </Col>
                  <Col md={4} xs={12}>
                    <Button
                      className="w-100 my-2"
                      onClick={() => setDifficulty("hard")}
                      variant="secondary"
                    >
                      Hard
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button
                      className="w-100"
                      onClick={goTopQuiz}
                      variant="primary"
                    >
                      Continue <i className="fas fa-angle-right"></i>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </StyledHome>
      <Rodal
        animation={"slideDown"}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Container>
          <Row>
            <h5 className=" mt-4 mx-auto">
              Please select the level of difficulty
            </h5>
          </Row>
          <Row className="justify-content-center">
            <img
              className="w-25 h-25"
              style={{ borderRadius: "1rem" }}
              src={confusedRobo}
              alt="robo"
            />
          </Row>
          <Row className="justify-content-center">
            <Button className="w-75 my-3" onClick={() => setVisible(false)}>
              close{" "}
            </Button>
          </Row>
        </Container>
      </Rodal>
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
