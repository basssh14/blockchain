import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import components
import Landing from "./components/Landing";
import InsideApp from "./components/InsideApp";

//actions imports
function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />{" "}
          <Route exact path="/appInside" component={InsideApp} />{" "}
        </Switch>
      </Fragment>{" "}
    </Router>
  );
}

export default App;
