import React, { useState } from "react";
import Rodal from "rodal";
import { Container, Row, Button } from "react-bootstrap";
import examImg from "../dist/images/cardImages/examImg.jpg";
import useWindowSize from "../utils/useWindowSize";

const QuizModal = ({ animation, visible, setVisible }) => {
  const windowSize = useWindowSize();
  const [loading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  };
  return (
    <Rodal
      animation={animation}
      visible={visible}
      height={300}
      width={windowSize.width < 425 ? 300 : 400}
      onClose={() => setVisible(false)}
    >
      <Container>
        <Row>
          <h6 className="text-center mt-4 mb-4 mx-auto">
            You cannot go back from here complete the test
          </h6>
        </Row>
        <Row className="justify-content-center">
          <div
            style={{ display: loading ? "block" : "none", height: "100px" }}
          />
          <img
            className="w-50 h-50"
            style={{ borderRadius: "1rem" }}
            src={examImg}
            alt="robo"
            onLoad={imageLoaded}
          />
        </Row>
        <Row className="justify-content-center">
          <Button className="w-75 my-3" onClick={() => setVisible(false)}>
            Alright, got it !
          </Button>
        </Row>
      </Container>
    </Rodal>
  );
};

export default QuizModal;
