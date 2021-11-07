import React from "react";
import Home from "../Home";
import About from "../About";
const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={<About />}></Route>
      <Route path="/" component={<Home />}></Route>
    </Switch>
  );
};

export default Routes;
