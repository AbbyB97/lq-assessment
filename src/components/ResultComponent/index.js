import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//project imports
import resultImg from "../../dist/images/cardImages/resImgMin.jpg";
import FadeContainer from "../../widgets/FadeContainer";
import { resetTestReducer } from "../../redux/actions";

const ResultComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const quizReducer = useSelector((state) => state.quizReducer);
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
        <h3 className="mb-3">Result</h3>
        <Container style={{ height: "100vh" }} className="card-container pb-3">
          <Card>
            <div
              style={{ display: loading ? "block" : "none", height: "224px" }}
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
              <Card.Title>
                Your score is :
                {quizReducer &&
                  quizReducer.questionSet &&
                  ` ${quizReducer.score}/${quizReducer.questionSet.length}`}
                {quizReducer &&
                  quizReducer.questionSet &&
                  ` (${
                    (quizReducer.score / quizReducer.questionSet.length) * 100
                  }%)`}
              </Card.Title>
              <Card.Text>Congrats on completing the test!</Card.Text>
            </Card.Body>
            <Container fluid>
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
