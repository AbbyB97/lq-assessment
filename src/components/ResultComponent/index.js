import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import MathJax from "react-mathjax-preview";

//project imports
import resultImg from "../../dist/images/cardImages/resImgMin.jpg";
import FadeContainer from "../../widgets/FadeContainer";
import { resetTestReducer } from "../../redux/actions";

const ResultComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const quizReducer = useSelector((state) => state.quizReducer);
  const questionSet = useSelector((state) => state.quizReducer.questionSet);
  const score = useSelector((state) => state.quizReducer.score);
  const answers = useSelector((state) => state.quizReducer.answers);

  const [loading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  };

  if (quizReducer && quizReducer.difficulty == "") {
    history.push("/");
  }
  return (
    <FadeContainer>
      <StyledHome>
        <h3 className="mb-3 pt-3">Result</h3>
        <Container style={{ height: "" }} className="card-container pb-3">
          <Card>
            <div
              style={{ display: loading ? "block" : "none", height: "150px" }}
            >
              {/* <p>loading image</p> */}
            </div>
            <Card.Img
              style={{ display: loading ? "none" : "block" }}
              className="mx-auto mt-3 w-50"
              variant="top"
              src={resultImg}
              onLoad={imageLoaded}
            />

            <Card.Body style={{ minHeight: "" }}>
              <Card.Title className="text-center">
                Your score is :
                {questionSet && score && ` ${score}/${questionSet.length}`}
                {questionSet &&
                  ` (${((score / questionSet.length) * 100).toFixed(1)}%)`}
              </Card.Title>
              <Card.Text className="text-center">
                Congrats on completing the test! You can cross check your
                answers below
              </Card.Text>
            </Card.Body>
            <Container fluid>
              {questionSet &&
                questionSet.map((question, i) => (
                  <React.Fragment key={i}>
                    <hr />
                    <Row>
                      <Col style={{overflowX:"auto"}} xs={12}>
                        {/* <p>{question.question}</p> */}
                        <MathJax
                          // className="question"
                          math={`Q.${i + 1} ${question.question}`}
                        />
                      </Col>
                      <Col style={{overflowX:"auto"}} xs={12}>
                        {/* <p>{question.correct}</p> */}
                        <MathJax
                          // className="question"
                          style={{color:answers[i]===question.correct?"green":"red"}}
                          math={`Your Answer : ${
                            answers[i] !== "" ? answers[i] : "NA"
                          }`}
                        />
                      </Col>
                      <Col style={{overflowX:"auto"}} xs={12}>
                        {/* <p>{question.correct}</p> */}
                        <MathJax
                          // className="question"
                          math={`Correct Answer : ${question.correct}`}
                        />
                      </Col>
                      <Col style={{overflowX:"auto"}} xs={12}>
                        {/* <p>{question.question}</p> */}

                        <p className="text-capitalize">
                          Difficulty : {question.difficulty}
                        </p>
                      </Col>
                    </Row>
                    {i === questionSet.length - 1 && <hr />}
                  </React.Fragment>
                ))}
              <Row>
                <Col>
                  <Button
                    className="w-100 mb-2"
                    variant="primary"
                    onClick={() => {
                      dispatch(resetTestReducer());
                      history.push("/");
                    }}
                  >
                    Take test again <i className="fas fa-angle-right"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card>
        </Container>
      </StyledHome>
    </FadeContainer>
  );
};

export default ResultComponent;

const StyledHome = styled.div`
  h3 {
    margin: 0;
    text-align: center;
    padding: 0;
  }
`;
