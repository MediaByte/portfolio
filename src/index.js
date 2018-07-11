import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import ProfilePage from "./views/ProfilePage/ProfilePage.jsx";

import "assets/scss/material-kit-react.css";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    	<Route exact path={"/"} component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
