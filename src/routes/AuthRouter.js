import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route component={LoginScreen} path="/auth/login" exact />
          <Route component={RegisterScreen} path="/auth/register" exact />
          <Redirect to="/auth/register" />
        </Switch>
      </div>
    </div>
  );
};
