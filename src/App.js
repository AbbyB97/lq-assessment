import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import styled from "styled-components";
import ResultComponent from "./components/ResultComponent";
import QuizComponent from "./components/QuizComponent";
import { device } from "./utils/mediaQuery";
import "rodal/lib/rodal.css";

function App() {
  return (
    <StyledDiv>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz/:question" component={QuizComponent} />
          <Route exact path="/result" component={ResultComponent} />
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
      width: 92vw;
    }

    @media ${device.tablet} {
      width: 70vw;
    }
    @media ${device.laptop} {
      width: 45vw;
    }
  }
`;
