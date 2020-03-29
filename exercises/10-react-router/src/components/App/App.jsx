/**
 * You will be setting up your routes in this file.
 *
 * You can use ./src/components/App/App.jsx as an example here:
 * @see https://codesandbox.io/s/react-router-vij9b?fontsize=14&hidenavigation=1&theme=dark
 *
 * You can also use this as a resource:
 * @see https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf#215c
 *
 * First, you will need to import the packages you need from React Router
 */

import React from "react";
// import some things from React Router
import Home from "../Home/Home";
import Category from "../Category/Category";

function App() {
  /**
   * Next, you will need to setup your routes here.
   * YOU SHOULD ONLY USE <Route> TWICE.
   *
   * - "/" should map to "Home"
   * - "/category/food" should map to "Category"
   * - "/category/clothing" should map to "Category"
   * - "/category/office" should map to "Category"
   */
  return (
    <>
      <div className="bg-success text-white pt-1 pb-1 mb-3">
        <h1 className="container h2">NoName E-Commerce</h1>
      </div>
      <main className="container mb-4">{/* Complete me */}</main>
    </>
  );
}

export default App;
