import React, { useState, createContext, useEffect } from "react";
import { getSessionCookie } from "../utils/Cookies.util";

export const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [uuid, setUUID] = useState(null);
  useEffect(() => {
    const uuid = getSessionCookie();
    console.log({ uuid });
    setUUID(uuid);
    console.log({ uuid });
  }, [uuid]);
  return (
    <CookieContext.Provider value={[uuid, setUUID]}>
      {children}
    </CookieContext.Provider>
  );
};
