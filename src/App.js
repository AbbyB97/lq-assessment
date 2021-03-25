import "./App.css";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import styled from "styled-components";
import ResultComponent from "./components/ResultComponent";
import QuizComponent from "./components/QuizComponent";
import { device } from "./utils/mediaQuery";
import "rodal/lib/rodal.css";
// import resultImg from "../dist/images/cardImages/resImg.jpg";
import resultImg from "./dist/images/cardImages/resImg.jpg";

function App() {
  return (
    <StyledDiv>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz/:question" component={QuizComponent} />
          <Route exact path="/result" component={ResultComponent} />
        </Switch>
      </HashRouter>
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
  /* height: 100%; */
  background-color: #2196f3;
  padding: 0rem;
  padding-bottom:6.5rem;
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
