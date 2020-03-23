import React, { useState, useEffect, useContext } from "react";
import { Route, Redirect } from "react-router";
import { getSessionCookie } from "../utils/Cookies.util";
import { CookieContext } from "../Context/SessionContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [uuid, setUUID] = useContext(CookieContext);
  const [hasUseEffectRan, setHasUseEffectRan] = useState(false);
  useEffect(() => {
    setUUID(getSessionCookie());
    setHasUseEffectRan(true);
  }, [uuid]);

  return (
    <Route
      {...rest}
      render={props => {
        if (!hasUseEffectRan) {
          return;
        }

        return uuid ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" {...props} {...rest} />
        );
      }}
    />
  );
};
