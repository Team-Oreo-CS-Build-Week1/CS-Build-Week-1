import React from "react";
import Dashboard from "./components/Dashboard";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";

function Routes(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
