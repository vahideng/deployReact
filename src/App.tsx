import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sprint1 from "./containers/Sprint_1/Sprint_1";
import Home from "./containers/Home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sprint-1" exact>
          <Sprint1 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
