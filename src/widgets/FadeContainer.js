import styled from "styled-components";
import { Container } from "react-bootstrap";

const FadeContainer = styled(Container)`
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default FadeContainer;
