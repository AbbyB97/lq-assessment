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
  height: 100vh;
  background-color: #2196f3;
  padding: 2rem;

  .card-container {
    @media ${device.mobileS} {
      width: 80vw;
    }

    @media ${device.tablet} {
      width: 40vw;
    }
  }
`;
