import React from "react";
import App from "../App";
import { Route, Switch, Redirect } from "react-router-dom";
import { Users } from "../View/Users";
import { CookieProvider } from "../Context/SessionContext";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const Routes = () => {
  return (
    <CookieProvider>
      <Switch>
        <Route exact path="/" component={App} />
        <ProtectedRoute exact path="/Cookie/Users" component={Users} />
      </Switch>
    </CookieProvider>
  );
};
