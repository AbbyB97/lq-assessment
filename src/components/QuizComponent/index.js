import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

//library imports
import { useSelector } from "react-redux";
import styled from "styled-components";
import { setAnswer } from "../../redux/actions";
import FadeContainer from "../../widgets/FadeContainer";
import QuizModal from "../../widgets/QuizModal";
import { device } from "../../utils/mediaQuery";
import MathJax from "react-mathjax-preview";

const QuizComponent = () => {
  const quizReducer = useSelector((state) => state.quizReducer);
  const questionSet = useSelector((state) => state.quizReducer.questionSet);
  const answers = useSelector((state) => state.quizReducer.answers);

  const dispatch = useDispatch();

  // const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState("");
  const history = useHistory();
  const { question } = useParams();

  if (quizReducer && quizReducer.difficulty == "") {
    history.push("/");
  }

  // useEffect(() => {
  //   return () => {
  //     if (history.action === "POP") {
  //       // handle any state changes necessary to set the screen display back one page.
  //       history.push(`/quiz/${question}`);
  //       setVisible(true);
  //     }
  //   };
  // }, [question]);

  useEffect(() => {
    console.log("question page changed", answers[question]);
    if (answers[question]) {
      setSelected(answers[question]);
    }
    // effect
    // return () => {
    //   cleanup
    // }
  }, [question]);

  const handleNext = () => {
    if (parseInt(question) + 1 !== questionSet.length) {
      dispatch(setAnswer(question, selected));
      history.push(`/quiz/${parseInt(question) + 1}`);
      setSelected("");
    } else {
      dispatch(setAnswer(question, selected));
      history.push(`/result`);
    }
  };

  return (
    questionSet && (
      <FadeContainer>
        <StyledQuizComp>
          <h3 className="mb-3 pt-3">LearnQ Assignment</h3>
          <Container className="card-container ">
            <Card>
              <Card.Body style={{ minHeight: "65vh" }}>
                <h5 className="text-center">Select your answer and submit</h5>
                <div
                  style={{
                    overflowX: "auto",
                    paddingLeft: "5px",
                  }}
                  className=""
                >
                  {/* <Card.Text className="mt-5">
                    {`Q. ${parseInt(question) + 1})  ${
                      questionSet[question].question
                    }`}
                  </Card.Text> */}
                  <MathJax
                    className="question"
                    math={`Q. ${parseInt(question) + 1})  ${
                      questionSet[question].question
                    }`}
                  />
                  <Container fluid className="">
                    <Row>
                      <Form>
                        <Form.Row className="align-items-center">
                          <Form.Check
                            className="my-2"
                            type="radio"
                            // label={questionSet[question].option_1}
                            name="formHorizontalRadios"
                            checked={
                              selected === questionSet[question].option_1
                            }
                            id="formHorizontalRadios1"
                            onChange={() =>
                              setSelected(questionSet[question].option_1)
                            }
                          />
                          <MathJax math={questionSet[question].option_1} />
                        </Form.Row>

                        <Form.Row className="align-items-center">
                          <Form.Check
                            className="my-2"
                            type="radio"
                            // label={questionSet[question].option_2}
                            name="formHorizontalRadios"
                            checked={
                              selected === questionSet[question].option_2
                            }
                            id="formHorizontalRadios2"
                            onChange={() =>
                              setSelected(questionSet[question].option_2)
                            }
                          />
                          <MathJax math={questionSet[question].option_2} />
                        </Form.Row>
                        <Form.Row className="align-items-center">
                          <Form.Check
                            className="my-2"
                            type="radio"
                            // label={questionSet[question].option_3}
                            name="formHorizontalRadios"
                            checked={
                              selected === questionSet[question].option_3
                            }
                            id="formHorizontalRadios3"
                            onChange={() =>
                              setSelected(questionSet[question].option_3)
                            }
                          />
                          <MathJax math={questionSet[question].option_3} />
                        </Form.Row>
                        <Form.Row className="align-items-center">
                          <Form.Check
                            className="my-2"
                            type="radio"
                            checked={
                              selected === questionSet[question].option_4
                            }
                            // label={questionSet[question].option_4}
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            onChange={() =>
                              setSelected(questionSet[question].option_4)
                            }
                          />
                          <MathJax math={questionSet[question].option_4} />
                        </Form.Row>
                      </Form>
                    </Row>
                  </Container>
                </div>
              </Card.Body>
              <Container>
                <Row className="justify-content-center">
                  <Col>
                    <Row className="justify-content-center">
                      <Button
                        className="w-75 my-2"
                        onClick={() => history.goBack()}
                        variant="primary"
                      >
                        back
                      </Button>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="justify-content-center">
                      <Button
                        className="w-75 my-2"
                        onClick={handleNext}
                        variant="primary"
                      >
                        {parseInt(question) !== questionSet.length - 1
                          ? `next`
                          : `submit`}
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Container>
        </StyledQuizComp>
        {/* <QuizModal
          animation={"slideDown"}
          visible={visible}
          setVisible={setVisible}
        /> */}
      </FadeContainer>
    )
  );
};

export default QuizComponent;

const StyledQuizComp = styled.div`
  h3 {
    margin: 0;
    text-align: center;
    padding: 0;
  }
  .question {
    /* color: red; */
    @media ${device.mobileS} {
      font-size: 0.75rem;
    }
    @media ${device.mobileM} {
      font-size: 0.9rem;
    }
    @media ${device.tablet} {
      font-size: 1.12rem;
    }
  }
  .form-check-label {
    /* color: red; */
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  .form-check-input {
    margin-top: 6px;
  }

  h5 {
    @media ${device.mobileS} {
      font-size: 1rem;
    }

    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }
`;
