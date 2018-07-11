import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import ProfilePage from "./views/ProfilePage/ProfilePage.jsx";
import Components from "./views/Components/Components.jsx";

import "assets/scss/material-kit-react.css";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    	<Route exact path={"/"} component={ProfilePage} />
    	<Route path={"/components"} component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
