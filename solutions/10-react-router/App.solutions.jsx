import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Category from "../Category/Category";

function App() {
  return (
    <>
      <div className="bg-success text-white pt-1 pb-1 mb-3">
        <h1 className="container h2">NoName E-Commerce</h1>
      </div>
      <main className="container mb-4">
        <Switch>
          {/* The ":category" is essentially a variable, which can be food, clothing or office */}
          <Route exact path="/category/:category" component={Category} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </>
  );
}

export default App;
