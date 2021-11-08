import React from "react";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Page from "../Page";
import Contact from "../Contact";
import { Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/page">
        <Page />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
