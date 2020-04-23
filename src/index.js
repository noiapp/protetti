
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import LandingPage from "views/noiapp/LandingPage.js";
// others

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/website" render={props => <LandingPage {...props} />} />
          <Redirect to="/website" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
