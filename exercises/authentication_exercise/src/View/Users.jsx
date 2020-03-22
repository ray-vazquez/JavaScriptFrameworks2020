import React, { useEffect, useContext } from "react";
import { CookieContext } from "../Context/SessionContext";
import axios from "axios";

export const Users = () => {
  const [uuid] = useContext(CookieContext);
  useEffect(() => {
    axios
      .get(
        " http://localhost:7000/cookie/users?id=" + uuid,
        {
          uuid: {
            uuid
          }
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        console.log(response);
      });
  }, [uuid]);

  return <div>Users</div>;
};
