import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

//library imports
import { useSelector } from "react-redux";
import styled from "styled-components";
import { setScore } from "../../redux/actions";
import FadeContainer from "../../widgets/FadeContainer";
import QuizModal from "../../widgets/QuizModal";
import { device } from "../../utils/mediaQuery";
import MathJax from "react-mathjax-preview";

const QuizComponent = () => {
  const quizReducer = useSelector((state) => state.quizReducer);
  const questionSet = useSelector((state) => state.quizReducer.questionSet);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const { question } = useParams();

  if (quizReducer && quizReducer.difficulty == "") {
    history.push("/");
  }

  useEffect(() => {
    return () => {
      if (history.action === "POP") {
        // handle any state changes necessary to set the screen display back one page.
        console.log("backbutton press");
        history.push(`/quiz/${question}`);
        setVisible(true);
      }
    };
  }, [question]);

  const handleNext = () => {
    if (parseInt(question) + 1 !== questionSet.length) {
      let isCorrect = questionSet[question].correct === selected;
      console.log("answer -- ", isCorrect);
      dispatch(setScore(isCorrect));

      history.push(`/quiz/${parseInt(question) + 1}`);
    } else {
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
                  style={
                    {
                      // minHeight: "70vh",
                      // display: "flex",
                      // flexDirection: "column",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }
                  }
                  className=""
                >
                  {/* <Card.Text className="mt-5">
                    {`Q. ${parseInt(question) + 1})  ${
                      questionSet[question].question
                    }`}
                  </Card.Text> */}
                  <MathJax
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
                            id="formHorizontalRadios1"
                            onClick={() =>
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
                            id="formHorizontalRadios2"
                            onClick={() =>
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
                            id="formHorizontalRadios3"
                            onClick={() =>
                              setSelected(questionSet[question].option_3)
                            }
                          />
                          <MathJax math={questionSet[question].option_3} />

                        </Form.Row>
                        <Form.Row className="align-items-center">
                          <Form.Check
                            className="my-2"
                            type="radio"
                            // label={questionSet[question].option_4}
                            name="formHorizontalRadios"
                            id="formHorizontalRadios4"
                            onClick={() =>
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
                  <Button
                    className="w-75 my-2"
                    onClick={handleNext}
                    variant="primary"
                  >
                    Submit
                  </Button>
                </Row>
              </Container>
            </Card>
          </Container>
        </StyledQuizComp>
        <QuizModal
          animation={"slideDown"}
          visible={visible}
          setVisible={setVisible}
        />
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
