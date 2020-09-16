import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={AuthRouter} path="/auth" />
          <Route component={JournalScreen} path="/" exact />
          <Redirect to="/auth/login"/>
        </Switch>
      </div>
    </Router>
  );
};
