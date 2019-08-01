import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../history";
import { AuthProvider } from "../../context/AuthContext";
import Content from "./Content";

const App = () => {
  return (
    <Router history={history}>
      <AuthProvider>
        <Switch>
          <Route component={Content} path="/" />=
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
