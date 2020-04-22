/**
 * Complete the steps to get the store up and going.
 * This is mostly a copy and paste job. See the last snippet of code on this page:
 * @see https://redux.js.org/basics/usage-with-react#passing-the-store
 * You will need to import the reducer.js file.
 * It has already been started for you.
 */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import App from "./components/AppContainer"; // We will talk about the container later

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
