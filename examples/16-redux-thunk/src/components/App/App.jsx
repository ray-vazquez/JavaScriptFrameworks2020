import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Category from "../Category/CategoryContainer";
import CompleteVoting from "../CompleteVoting/CompleteVoting";

function App() {
  return (
    <Switch>
      <Route exact path="/complete" component={CompleteVoting} />
      <Route path="/category/:id/" component={Category} />
      <Redirect to="/category/1/" />
    </Switch>
  );
}

export default App;
