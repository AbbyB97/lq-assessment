import React from "react";
import Rodal from "rodal";
import { Container, Row, Button } from "react-bootstrap";
// import confusedRobo from "../dist/images/cardImages/confusedRobo.png";
import confusedRobo from "../dist/images/cardImages/confusedRobo.png";

const HomeModal = ({ animation, visible, setVisible }) => {
  return (
    <Rodal
      animation={animation}
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
            Alright, got it !
          </Button>
        </Row>
      </Container>
    </Rodal>
  );
};

export default HomeModal;
