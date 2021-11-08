import React from "react";
import Home from "../Home";
import About from "../About";
import {Switch,Route} from 'react-router-dom'
const Routes = () => {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
