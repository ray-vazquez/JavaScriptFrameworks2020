import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Importing library to make cookie management easier
import axios from "axios";

/**
 * This content will only be displayed if the user is logged in.
 * @param {Object} props passing the logout function down as props from <LoginHandler />
 * @example {
 *    logout: () => { logout functionality }
 * }
 */
function LoggedInContent({ logout }) {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    /**
     * The API should not give you back any users unless you are logged in.
     * To prove that you are logged in, you must pass the token in the API.
     * Getting the token from a cookie.
     * NOTE it isn't best practice to get the token like this in every React component. We will show you a better way with the Context API and protected routes.
     */
    const uuid = Cookies.get("token");
    axios
      .get("http://localhost:7000/cookie/users", {
        /**
         * We could use the "Authorize" header like we did in the local storage example,
         * but I'm showing you an alternative way of doing this,
         * where you pass the token as a query parameter.
         */
        params: {
          id: uuid // Try commenting me out and see what happens when no token is passed
        }
      })
      .then(resp => setUsers(resp.data.data))
      .catch(err => {
        console.error(err);
        setErrorMessage("Oh no! An unexpected error occurred.");
      });
  }, []);

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        <button type="button" className="btn btn-primary mb-2" onClick={logout}>
          Logout
        </button>
      </div>
      <p>
        Notice that when you refresh the page, you are still logged in. That's
        because the token is stored in local storage.
      </p>
      {users.map(user => {
        const key = `user-${user.id}`;
        const name = `${user.firstName} ${user.lastName}`;
        return (
          <div key={key}>
            <img src={user.avatar} alt={name} />
            <p>{name}</p>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default LoggedInContent;
