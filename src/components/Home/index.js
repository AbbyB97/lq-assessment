import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

//project imports
import quizBanner from "../../dist/images/cardImages/quizBanner.png";
import FadeContainer from "../../widgets/FadeContainer";
import HomeModal from "../../widgets/HomeModal";
import { setDifficultyAction } from "../../redux/actions";

const Home = () => {
  const history = useHistory();
  const [difficulty, setDifficulty] = useState("");
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const goTopQuiz = () => {
    if (difficulty !== "") {
      dispatch(setDifficultyAction(difficulty));
      history.push("/quiz/0");
    } else {
      setVisible(true);
    }
  };

  const [loading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <FadeContainer>
      <StyledHome style={{ paddingBottom: "4rem" }}>
        <h3 className="mb-3 pt-3">LearnQ Assignment</h3>
        <Container className="card-container pb-5 ">
          <Card>
            {loading && (
              <div
                style={{ display: loading ? "block" : "none", height: "275px" }}
              />
            )}
            {/* <p>loading image</p> */}
            <Card.Img
              className="mx-auto mt-3 w-75"
              variant="top"
              src={quizBanner}
              onLoad={imageLoaded}
            />
            <Card.Body>
              <Container fluid>
                <Card.Title className="text-center">
                  Select Your difficulty
                </Card.Title>
                <Card.Text className="text-center">
                  The questions will be asked as per this selection
                </Card.Text>
                <Row>
                  <Col md={3} xs={12}>
                    <Button
                      className=" w-100 my-2"
                      onClick={() => setDifficulty("easy")}
                      variant="secondary"
                      active={difficulty === "easy"}
                    >
                      Easy
                    </Button>
                  </Col>
                  <Col md={3} xs={12}>
                    <Button
                      className="w-100 my-2"
                      onClick={() => setDifficulty("medium")}
                      variant="secondary"
                      active={difficulty === "medium"}
                    >
                      Medium
                    </Button>
                  </Col>
                  <Col md={3} xs={12}>
                    <Button
                      className="w-100 my-2"
                      onClick={() => setDifficulty("hard")}
                      variant="secondary"
                      active={difficulty === "hard"}
                    >
                      Hard
                    </Button>
                  </Col>
                  <Col md={3} xs={12}>
                    <Button
                      className="w-100 my-2"
                      onClick={() => setDifficulty("any")}
                      variant="secondary"
                      active={difficulty === "any"}
                    >
                      Any
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
      <HomeModal
        animation={"slideDown"}
        visible={visible}
        setVisible={setVisible}
      />
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
