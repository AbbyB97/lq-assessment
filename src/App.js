import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import styled from "styled-components";
import QuizComponent from "./components/QuizComponent";
import { device } from "./utils/mediaQuery";

function App() {
  return (
    <StyledDiv>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={QuizComponent} />
        </Switch>
      </BrowserRouter>
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
  /* height: 100%; */
  background-color: #2196f3;
  padding: 0rem;

  .card-container {
    @media ${device.mobileS} {
      width: 90vw;
    }

    @media ${device.tablet} {
      width: 60vw;
    }
    @media ${device.laptop} {
      width: 40vw;
    }
  }
`;
