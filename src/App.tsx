import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sprint1 from "./containers/Sprint_1/Sprint_1";
import Home from "./containers/Home/Home";
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sprint-1">Sprint-1</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sprint-1">
            <Sprint1 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
