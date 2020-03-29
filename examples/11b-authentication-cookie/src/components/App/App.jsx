import React, { useState } from "react";
import Cookies from "js-cookie"; // Importing library to make cookie management easier
import LoggedInContent from "../LoggedInContent/LoggedInContent";
import axios from "axios";

function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * When a user is logged in, a token is stored in a cookie and "isLoggedIn" is true.
   * `Cookies.get("token"` is equal to the token
   * `!!Cookies.get("token"` casts the starting value as a boolean, forcing "isLoggedIn" to be either true or false.
   */
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  const login = token => {
    /**
     * When the user refreshed the page or closes the tab, the logged in state is lost. They will have to login again.
     * To prevents this, I am storing the token in a cookie, which will still be there when the user refreshes or reopens the application.
     */
    Cookies.set("token", token);
    /**
     * Setting in state so that I can force this component to rerender and show the logged in user content.
     */
    setIsLoggedIn(true);
    /**
     * Clearing everything else, so if the user logout, it won't be prepopulated.
     */
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };
  /**
   * Logs a user out by deleting the token cookie and setting the "isLoggedIn" to false.
   */
  const logout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  const handleLoginRequest = e => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    axios("http://localhost:7000/cookie/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        username,
        password
      }
    })
      .then(resp => login(resp.data.uuid)) // The UUID is a type of token that is used in this example
      .catch(err => {
        console.error(err);
        if (!err.response || !err.response.data || !err.response.data.message)
          setErrorMessage("Oh no! An unexpected error occurred.");
        else setErrorMessage(err.response.data.message);
      })
      .then(() => setIsLoading(false));
  };

  if (isLoggedIn) {
    return <LoggedInContent logout={logout} />;
  } else {
    /**
     * If the user hasn't logged in yet, this renders a login form.
     */
    return (
      <div className="container mt-2 mb-5">
        <h1>Login</h1>
        <form className="form-inline mb-2" onSubmit={handleLoginRequest}>
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              required={true}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="mr-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mr-3"
              required={true}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            Login
          </button>
        </form>
        <p className="form-text">
          <small>
            The username is <em>username</em> and the password is{" "}
            <em>password</em>
          </small>
        </p>
        {isLoading && <p>Loading ...</p>}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
}

export default App;
