import React, { useState, useContext } from "react";
import "./App.css";
import axios from "axios";
import { setSessionCookie } from "../src/utils/Cookies.util";
import { CookieContext } from "../src/Context/SessionContext";

function App({ history }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [uuid, setUUID] = useContext(CookieContext);
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:7000/cookie/login",
      {
        username,
        password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (response.data.message) {
      setSessionCookie(response.data.uuid);
      setUUID(response.data.uuid);
      history.push("/Cookie/Users");
    }
  };

  return (
    <div className="App">
      <div>
        <h1>Sign In</h1>
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              onChange={e => setUserName(e.target.value)}
              value={username}
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
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
