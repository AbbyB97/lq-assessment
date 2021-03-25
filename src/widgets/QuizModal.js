import React from "react";
import Rodal from "rodal";
import { Container, Row, Button } from "react-bootstrap";
// import confusedRobo from "../dist/images/cardImages/confusedRobo.png";
import examImg from "../dist/images/cardImages/examImg.jpg";
import useWindowSize from "../utils/useWindowSize";

const QuizModal = ({ animation, visible, setVisible }) => {
  const windowSize = useWindowSize();
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
          <img
            className="w-50 h-50"
            style={{ borderRadius: "1rem" }}
            src={examImg}
            alt="robo"
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
