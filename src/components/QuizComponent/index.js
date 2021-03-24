import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonGroup,
  Form,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FadeContainer from "../../widgets/FadeContainer";

const QuizComponent = () => {
  const quizReducer = useSelector((state) => state.quizReducer);
  const questionSet = useSelector((state) => state.quizReducer.questionSet);

  const [selected, setSelected] = useState(null);
  const history = useHistory();
  const { question } = useParams();

  if (quizReducer && quizReducer.difficulty == "") {
    history.push("/");
  }

  const handleNext = () => {
    if (parseInt(question) + 1 !== questionSet.length) {
      history.push(`/quiz/${parseInt(question) + 1}`);
    } else {
      history.push(`/result`);
    }
  };

  return (
    questionSet && (
      <FadeContainer>
        <StyledQuizComp>
          <h3 className="mb-3">LearnQ Assignment</h3>
          <Container className="card-container pb-3">
            <Card>
              <Card.Body style={{ minHeight: "90vh" }}>
                <Card.Title>Answer the following question</Card.Title>
                <Card.Text>{questionSet[question].question}</Card.Text>
                <Container fluid className="">
                  <Row>
                    <Form>
                      <Form.Check
                        className="my-2"
                        type="radio"
                        label={questionSet[question].option_1}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={() =>
                          setSelected(questionSet[question].option_1)
                        }
                      />
                      <Form.Check
                        className="my-2"
                        type="radio"
                        label={questionSet[question].option_2}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick={() =>
                          setSelected(questionSet[question].option_2)
                        }
                      />
                      <Form.Check
                        className="my-2"
                        type="radio"
                        label={questionSet[question].option_3}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        onClick={() =>
                          setSelected(questionSet[question].option_3)
                        }
                      />
                      <Form.Check
                        className="my-2"
                        type="radio"
                        label={questionSet[question].option_4}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                        onClick={() =>
                          setSelected(questionSet[question].option_4)
                        }
                      />
                    </Form>
                  </Row>
                </Container>
              </Card.Body>
              <Container>
                <Row className="justify-content-center">
                  <Button
                    className="w-75 my-2"
                    onClick={handleNext}
                    variant="primary"
                  >
                    Next <i className="fas fa-angle-right"></i>
                  </Button>
                </Row>
              </Container>
            </Card>
          </Container>
        </StyledQuizComp>
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
`;
