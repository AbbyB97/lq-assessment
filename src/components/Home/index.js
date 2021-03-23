import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import quizBanner from "../../dist/images/cardImages/quizBanner.png";
import StyledContainer from "../../widgets/StyledContainer";
import { device } from "../../utils/mediaQuery";

const Home = () => {
  return (
    <StyledContainer>
      <StyledHome>
        <h3 className="my-3">LearnQ Assignment</h3>
        <Container className="card-container">
          <Card>
            <Card.Img
              className="mx-auto mt-3 w-75"
              variant="top"
              src={quizBanner}
            />
            <Card.Body>
              <Card.Title>Select Your difficulty</Card.Title>
              <Card.Text>
                The Questions will be asked as per this selection
              </Card.Text>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <Button className="mx-2" variant="secondary">
                    Easy
                  </Button>
                  <Button className="mx-2" variant="secondary">
                    Middle
                  </Button>
                  <Button className="mx-2" variant="secondary">
                    Hard
                  </Button>
                </div>
                <Button variant="primary">
                  <i class="fas fa-angle-right"></i>
                </Button>
              </div>
            </Card.Body>
            {/* <h4>Select Your difficulty</h4>
          <Container>
            <Row>
              <Col md={4} xs={12}>
                Easy
              </Col>
              <Col md={4} xs={12}>
                Medium
              </Col>
              <Col md={4} xs={12}>
                Hard
              </Col>
            </Row>

            <Row>
              <Button className="mt-2" variant="dark">
                Lets Begin!
              </Button>
            </Row>
          </Container> */}
          </Card>
        </Container>
      </StyledHome>
    </StyledContainer>
  );
};

export default Home;

const StyledHome = styled.div`
  h3 {
    margin: 0;
    text-align: center;
  }
  .card-container {
    @media ${device.mobileS} {
      width: 80vw;
    }

    @media ${device.tablet} {
      width: 40vw;
    }
  }
`;
