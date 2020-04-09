import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sprint1 from "./containers/Sprint_1/Sprint_1";
import Sprint2 from "./containers/Sprint_2/Sprint_2";
import Home from "./containers/Home/Home";
import Sprint3 from "./containers/Sprint_3/Sprint_3";
import Sprint4 from "./containers/Sprint_4/Sprint_4";

import NodeModule from './containers/nodeMoudleTest'
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
        <Route path="/sprint-2" exact>
          <Sprint2 />
        </Route>
        <Route path="/sprint-3" exact>
          <Sprint3 />
        </Route>
        <Route path="/sprint-4" exact>
          <Sprint4 />
        </Route>
        <Route path="/NodeModule" exact>
          <NodeModule />
        </Route>


        
      </Switch>
    </Router>
  );
};

export default App;
