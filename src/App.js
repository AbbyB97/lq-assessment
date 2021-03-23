import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import QuizComponent from "./components/QuizComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={QuizComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
