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
import resultImg from "../../dist/images/cardImages/resImgMin.jpg";
import FadeContainer from "../../widgets/FadeContainer";
import { device } from "../../utils/mediaQuery";
import { useDispatch, useSelector } from "react-redux";
import HomeModal from "../../widgets/HomeModal";
import { simpleAction, setDifficultyAction } from "../../redux/actions";

const ResultComponent = () => {
  const history = useHistory();

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
              Loading images,
            </div>
            <Card.Img
              style={{ display: loading ? "none" : "block" }}
              className="mx-auto mt-3 w-50"
              variant="top"
              src={resultImg}
              onLoad={imageLoaded}
            />
            <Card.Body style={{ minHeight: "" }}>
              <Card.Title>Your score is : </Card.Title>
              <Card.Text>Congrats on completing the test!</Card.Text>
            </Card.Body>
            <Container fluid>
              <Row>
                <Col>
                  <Button
                    className="w-100 mb-2"
                    variant="primary"
                    onClick={() => history.push("/")}
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
